import { serve } from 'https://deno.land/std@0.208.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface RequestBody {
  code: string
  provider: 'google' | 'microsoft'
  userId: string
  redirectUri: string
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { code, provider, userId, redirectUri }: RequestBody = await req.json()

    if (!code || !provider || !userId || !redirectUri) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Exchange code for tokens
    let tokenResponse: { access_token: string; refresh_token: string; email?: string }

    if (provider === 'google') {
      const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          code,
          client_id: Deno.env.get('GOOGLE_CLIENT_ID')!,
          client_secret: Deno.env.get('GOOGLE_CLIENT_SECRET')!,
          redirect_uri: redirectUri,
          grant_type: 'authorization_code',
        }),
      })

      if (!tokenRes.ok) {
        const err = await tokenRes.text()
        return new Response(JSON.stringify({ error: `Google token error: ${err}` }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      tokenResponse = await tokenRes.json()

      // Get user email from Google
      const profileRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      })
      const profile = await profileRes.json()
      tokenResponse.email = profile.email
    } else {
      // Microsoft
      const tenantId = Deno.env.get('MICROSOFT_TENANT_ID') ?? 'common'
      const tokenRes = await fetch(
        `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            code,
            client_id: Deno.env.get('MICROSOFT_CLIENT_ID')!,
            client_secret: Deno.env.get('MICROSOFT_CLIENT_SECRET')!,
            redirect_uri: redirectUri,
            grant_type: 'authorization_code',
            scope: 'https://graph.microsoft.com/Mail.Read offline_access email profile openid',
          }),
        },
      )

      if (!tokenRes.ok) {
        const err = await tokenRes.text()
        return new Response(JSON.stringify({ error: `Microsoft token error: ${err}` }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      tokenResponse = await tokenRes.json()

      // Get user email from Microsoft Graph
      const profileRes = await fetch('https://graph.microsoft.com/v1.0/me', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      })
      const profile = await profileRes.json()
      tokenResponse.email = profile.mail ?? profile.userPrincipalName
    }

    const emailAddress = tokenResponse.email ?? ''

    // Create credential in n8n
    const n8nUrl = Deno.env.get('N8N_API_URL')
    const n8nApiKey = Deno.env.get('N8N_API_KEY')
    let n8nCredentialId: string | null = null

    if (n8nUrl && n8nApiKey) {
      const credentialType = provider === 'google' ? 'gmailOAuth2Api' : 'microsoftOutlookOAuth2Api'
      const credentialName = `user_${userId}_${provider}`

      const n8nRes = await fetch(`${n8nUrl}/api/v1/credentials`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-N8N-API-KEY': n8nApiKey,
        },
        body: JSON.stringify({
          name: credentialName,
          type: credentialType,
          data: {
            clientId: provider === 'google'
              ? Deno.env.get('GOOGLE_CLIENT_ID')
              : Deno.env.get('MICROSOFT_CLIENT_ID'),
            clientSecret: provider === 'google'
              ? Deno.env.get('GOOGLE_CLIENT_SECRET')
              : Deno.env.get('MICROSOFT_CLIENT_SECRET'),
            accessToken: tokenResponse.access_token,
            refreshToken: tokenResponse.refresh_token,
          },
        }),
      })

      if (n8nRes.ok) {
        const n8nData = await n8nRes.json()
        n8nCredentialId = n8nData.id ?? null
      }
      // Non-fatal: continue even if n8n credential creation fails
    }

    // Save connection in Supabase (without storing tokens in DB — they live in n8n)
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SERVICE_ROLE_KEY')!,
    )

    // Upsert: replace existing connection for this user+provider
    const { error: dbError } = await supabase
      .from('email_connections')
      .upsert(
        {
          user_id: userId,
          provider,
          email_address: emailAddress,
          n8n_credential_id: n8nCredentialId,
          status: 'active',
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,provider' },
      )

    if (dbError) {
      return new Response(JSON.stringify({ error: `DB error: ${dbError.message}` }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(
      JSON.stringify({ success: true, email_address: emailAddress, provider }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})

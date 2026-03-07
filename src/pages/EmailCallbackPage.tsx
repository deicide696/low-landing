import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CheckCircle, XCircle } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export default function EmailCallbackPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { user } = useAuth()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [errorMsg, setErrorMsg] = useState('')
  const [connectedEmail, setConnectedEmail] = useState('')

  useEffect(() => {
    const code = searchParams.get('code')
    const provider = searchParams.get('state')?.split(':')[0] as 'google' | 'microsoft' | null
    const userId = searchParams.get('state')?.split(':')[1] ?? user?.id

    if (!code || !provider || !userId) {
      setStatus('error')
      setErrorMsg('Parámetros de autorización inválidos.')
      return
    }

    const exchangeToken = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
        const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

        const res = await fetch(`${supabaseUrl}/functions/v1/exchange-email-token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${supabaseAnonKey}`,
          },
          body: JSON.stringify({
            code,
            provider,
            userId,
            redirectUri: `${window.location.origin}/auth/email-callback`,
          }),
        })

        const data = await res.json()

        if (!res.ok || data.error) {
          setStatus('error')
          setErrorMsg(data.error ?? 'Error al conectar el correo.')
          return
        }

        setConnectedEmail(data.email_address)
        setStatus('success')

        setTimeout(() => {
          navigate('/connect-email?status=success', { replace: true })
        }, 2500)
      } catch {
        setStatus('error')
        setErrorMsg('Error de red. Intenta de nuevo.')
      }
    }

    exchangeToken()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:32px_32px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-gradient-to-b from-blue-500/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative glass-dark rounded-2xl p-10 max-w-sm w-full text-center border border-white/5">
        {status === 'loading' && (
          <div className="flex flex-col items-center gap-4">
            <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-blue-400 animate-spin" />
            <p className="text-white font-medium">Conectando tu correo...</p>
            <p className="text-sm text-slate-400">Esto toma solo unos segundos</p>
          </div>
        )}

        {status === 'success' && (
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="h-12 w-12 text-emerald-400" />
            <div>
              <p className="text-white font-semibold text-lg">¡Correo conectado!</p>
              {connectedEmail && (
                <p className="text-sm text-emerald-400 mt-1">{connectedEmail}</p>
              )}
              <p className="text-sm text-slate-400 mt-2">Redirigiendo...</p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="flex flex-col items-center gap-4">
            <XCircle className="h-12 w-12 text-red-400" />
            <div>
              <p className="text-white font-semibold text-lg">Error al conectar</p>
              <p className="text-sm text-slate-400 mt-1">{errorMsg}</p>
            </div>
            <button
              onClick={() => navigate('/connect-email', { replace: true })}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Volver e intentar de nuevo
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { Mail, ShieldCheck, Eye, CheckCircle, AlertTriangle } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'
import type { EmailConnection } from '../../types'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
      <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
      <rect x="0" y="0" width="8.5" height="8.5" fill="#F25022"/>
      <rect x="9.5" y="0" width="8.5" height="8.5" fill="#7FBA00"/>
      <rect x="0" y="9.5" width="8.5" height="8.5" fill="#00A4EF"/>
      <rect x="9.5" y="9.5" width="8.5" height="8.5" fill="#FFB900"/>
    </svg>
  )
}

export default function ConnectEmailPage() {
  const { user } = useAuth()
  const [searchParams] = useSearchParams()
  const [connection, setConnection] = useState<EmailConnection | null>(null)
  const [loadingConn, setLoadingConn] = useState(true)
  const justConnected = searchParams.get('status') === 'success'

  useEffect(() => {
    if (!user) return
    supabase
      .from('email_connections')
      .select('*')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .maybeSingle()
      .then(({ data }) => {
        if (data) setConnection(data as EmailConnection)
        setLoadingConn(false)
      })
  }, [user])

  const connectGmail = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as string
    const redirectUri = `${window.location.origin}/auth/email-callback`
    const state = `google:${user?.id}`

    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: [
        'https://www.googleapis.com/auth/gmail.readonly',
        'email',
        'profile',
      ].join(' '),
      access_type: 'offline',
      prompt: 'consent',
      state,
    })

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`
  }

  const connectOutlook = () => {
    const clientId = import.meta.env.VITE_MICROSOFT_CLIENT_ID as string
    const redirectUri = `${window.location.origin}/auth/email-callback`
    const state = `microsoft:${user?.id}`

    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: [
        'https://graph.microsoft.com/Mail.Read',
        'offline_access',
        'email',
        'profile',
        'openid',
      ].join(' '),
      response_mode: 'query',
      state,
    })

    window.location.href = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${params}`
  }

  const permissions = [
    { icon: Eye, label: 'Leer correos entrantes', sublabel: 'Solo bandeja de entrada' },
    { icon: ShieldCheck, label: 'Acceso de solo lectura', sublabel: 'No puede enviar ni eliminar' },
    { icon: Mail, label: 'Extraer facturas y pagos', sublabel: 'Datos estructurados únicamente' },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-2xl"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-white font-[Outfit]">Conectar correo</h2>
        <p className="mt-1 text-sm text-slate-400">
          Autoriza a Low a leer tu bandeja de entrada para procesar facturas automáticamente.
        </p>
      </motion.div>

      {/* Success message */}
      {justConnected && (
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 glass-dark rounded-2xl p-5 border border-emerald-500/20 bg-emerald-500/5"
        >
          <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-white">Correo conectado exitosamente</p>
            {connection && (
              <p className="text-sm text-emerald-400 mt-0.5">{connection.email_address}</p>
            )}
          </div>
        </motion.div>
      )}

      {/* Current connection status */}
      {!loadingConn && connection && !justConnected && (
        <motion.div variants={itemVariants} className="glass-dark rounded-2xl p-5 border border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Correo conectado</p>
                <p className="text-sm text-emerald-400">{connection.email_address}</p>
              </div>
            </div>
            <span className="text-xs text-slate-500 capitalize">{connection.provider}</span>
          </div>
        </motion.div>
      )}

      {/* What Low can access */}
      <motion.div variants={itemVariants} className="glass-dark rounded-2xl p-6 border border-white/5">
        <h3 className="text-sm font-semibold text-white mb-4">¿Qué accesos solicita Low?</h3>
        <div className="space-y-3">
          {permissions.map(({ icon: Icon, label, sublabel }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Icon className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-white">{label}</p>
                <p className="text-xs text-slate-500">{sublabel}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-start gap-2 rounded-xl bg-yellow-500/5 border border-yellow-500/20 px-4 py-3">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 leading-relaxed">
            Low nunca enviará correos en tu nombre ni eliminará mensajes.
            El acceso es <strong className="text-white">solo lectura</strong>.
          </p>
        </div>
      </motion.div>

      {/* Connect buttons */}
      <motion.div variants={itemVariants} className="glass-dark rounded-2xl p-6 border border-white/5 space-y-3">
        <h3 className="text-sm font-semibold text-white mb-4">
          {connection ? 'Cambiar cuenta conectada' : 'Selecciona tu proveedor de correo'}
        </h3>

        <button
          onClick={connectGmail}
          className="w-full flex items-center justify-center gap-3 rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition-all"
        >
          <GoogleIcon />
          {connection?.provider === 'google' ? 'Reconectar Gmail' : 'Conectar Gmail'}
        </button>

        <button
          onClick={connectOutlook}
          className="w-full flex items-center justify-center gap-3 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-3.5 text-sm font-semibold text-white border border-white/10 transition-all"
        >
          <MicrosoftIcon />
          {connection?.provider === 'microsoft' ? 'Reconectar Outlook' : 'Conectar Outlook'}
        </button>

        <p className="text-center text-xs text-slate-500 pt-1">
          Serás redirigido a Google o Microsoft para autorizar el acceso.
        </p>
      </motion.div>
    </motion.div>
  )
}

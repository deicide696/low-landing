import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import Logo from '../components/Logo'

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="0" y="0" width="8.5" height="8.5" fill="#F25022"/>
      <rect x="9.5" y="0" width="8.5" height="8.5" fill="#7FBA00"/>
      <rect x="0" y="9.5" width="8.5" height="8.5" fill="#00A4EF"/>
      <rect x="9.5" y="9.5" width="8.5" height="8.5" fill="#FFB900"/>
    </svg>
  )
}

export default function RegisterPage() {
  const [loading, setLoading] = useState<'google' | 'microsoft' | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleGoogleRegister = async () => {
    setLoading('google')
    setError(null)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        scopes: 'email profile',
      },
    })
    if (error) {
      setError('No se pudo conectar con Google. Intenta de nuevo.')
      setLoading(null)
    }
  }

  const handleMicrosoftRegister = async () => {
    setLoading('microsoft')
    setError(null)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'azure',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        scopes: 'email profile openid',
      },
    })
    if (error) {
      setError('No se pudo conectar con Microsoft. Intenta de nuevo.')
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden px-6">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:32px_32px]" />

      {/* Gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-emerald-500/15 to-transparent blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="relative w-full max-w-sm"
      >
        <div className="glass-dark rounded-2xl p-8 border border-white/5">
          {/* Logo + Slogan */}
          <div className="flex flex-col items-center mb-8 gap-2">
            <Logo className="w-24" imgClassName="object-contain w-full h-full brightness-0 invert" />
            <p className="text-xs font-medium tracking-[0.2em] text-slate-400">Legion of Workers</p>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white font-[Outfit]">
              Crea tu cuenta
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Accede a tu automatización en segundos
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <div className="space-y-3">
            <button
              onClick={handleGoogleRegister}
              disabled={loading !== null}
              className="w-full flex items-center justify-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading === 'google' ? (
                <div className="h-4 w-4 rounded-full border-2 border-slate-300 border-t-slate-700 animate-spin" />
              ) : (
                <GoogleIcon />
              )}
              Registrarse con Google
            </button>

            <button
              onClick={handleMicrosoftRegister}
              disabled={loading !== null}
              className="w-full flex items-center justify-center gap-3 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-3 text-sm font-semibold text-white border border-white/10 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading === 'microsoft' ? (
                <div className="h-4 w-4 rounded-full border-2 border-slate-500 border-t-white animate-spin" />
              ) : (
                <MicrosoftIcon />
              )}
              Registrarse con Microsoft
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500 leading-relaxed">
            Al registrarte aceptas que Low procese tu correo para la automatización contratada.
          </p>

          <p className="mt-4 text-center text-sm text-slate-500">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Inicia sesión
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

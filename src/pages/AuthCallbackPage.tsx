import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function AuthCallbackPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        navigate('/dashboard', { replace: true })
      } else if (event === 'SIGNED_OUT') {
        navigate('/login', { replace: true })
      }
    })

    // Fallback: if session already exists (URL hash parsed), redirect
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        navigate('/dashboard', { replace: true })
      }
    })

    return () => subscription.unsubscribe()
  }, [navigate])

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-blue-400 animate-spin" />
        <p className="text-slate-400 text-sm">Iniciando sesión...</p>
      </div>
    </div>
  )
}

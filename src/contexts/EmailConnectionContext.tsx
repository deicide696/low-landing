import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './AuthContext'
import type { EmailConnection } from '../types'

interface EmailConnectionContextValue {
  connection: EmailConnection | null
  loading: boolean
  refresh: () => void
}

const EmailConnectionContext = createContext<EmailConnectionContextValue | null>(null)

export function EmailConnectionProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const [connection, setConnection] = useState<EmailConnection | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchConnection = async () => {
    if (!user) {
      setLoading(false)
      return
    }

    setLoading(true)
    const { data } = await supabase
      .from('email_connections')
      .select('*')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .maybeSingle()

    setConnection(data as EmailConnection | null)
    setLoading(false)
  }

  useEffect(() => {
    fetchConnection()
  }, [user])

  return (
    <EmailConnectionContext.Provider value={{ connection, loading, refresh: fetchConnection }}>
      {children}
    </EmailConnectionContext.Provider>
  )
}

export function useEmailConnection() {
  const ctx = useContext(EmailConnectionContext)
  if (!ctx) throw new Error('useEmailConnection must be used within EmailConnectionProvider')
  return ctx
}

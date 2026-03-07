import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { Mail, FileText, Clock, AlertCircle, ArrowRight, Zap } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import type { AutomationRun, EmailConnection } from '../../types'
import Badge from '../../components/ui/Badge'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
}

export default function DashboardPage() {
  const { user } = useAuth()
  const [runs, setRuns] = useState<AutomationRun[]>([])
  const [connection, setConnection] = useState<EmailConnection | null>(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (!user) return

    const fetchData = async () => {
      const [runsRes, connRes] = await Promise.all([
        supabase
          .from('automation_runs')
          .select('*')
          .eq('user_id', user.id)
          .order('run_at', { ascending: false })
          .limit(5),
        supabase
          .from('email_connections')
          .select('*')
          .eq('user_id', user.id)
          .eq('status', 'active')
          .maybeSingle(),
      ])

      if (runsRes.data) setRuns(runsRes.data as AutomationRun[])
      if (connRes.data) setConnection(connRes.data as EmailConnection)
      setLoadingData(false)
    }

    fetchData()
  }, [user])

  const totalEmails = runs.reduce((acc, r) => acc + r.emails_scanned, 0)
  const totalInvoices = runs.reduce((acc, r) => acc + r.invoices_found, 0)
  const lastName = runs.length > 0 ? runs[0].run_at : null

  const firstName = user?.user_metadata?.full_name?.split(' ')[0]
    ?? user?.email?.split('@')[0]
    ?? 'usuario'

  const stats = [
    { label: 'Correos procesados', value: totalEmails, icon: Mail, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Facturas capturadas', value: totalInvoices, icon: FileText, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Ejecuciones totales', value: runs.length, icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-6xl"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-white font-[Outfit]">
          Hola, {firstName}
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Aquí tienes el resumen de tu automatización.
        </p>
      </motion.div>

      {/* Email connection alert */}
      {!loadingData && !connection && (
        <motion.div variants={itemVariants}>
          <div className="glass-dark rounded-2xl p-5 border border-yellow-500/20 bg-yellow-500/5 flex items-start gap-4">
            <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Correo no conectado</p>
              <p className="mt-1 text-sm text-slate-400">
                Conecta tu cuenta de Gmail u Outlook para que Low pueda procesar tus facturas automáticamente.
              </p>
            </div>
            <Link
              to="/connect-email"
              className="flex items-center gap-1.5 text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors whitespace-nowrap"
            >
              Conectar <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      )}

      {/* Stats */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="glass-dark rounded-2xl p-5 border border-white/5">
            <div className={`inline-flex p-2 rounded-xl ${bg} mb-3`}>
              <Icon className={`h-4 w-4 ${color}`} />
            </div>
            <p className="text-2xl font-bold text-white font-[Outfit]">
              {loadingData ? '—' : value}
            </p>
            <p className="mt-1 text-xs text-slate-400">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* Recent runs */}
      <motion.div variants={itemVariants} className="glass-dark rounded-2xl border border-white/5">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <h3 className="text-sm font-semibold text-white">Actividad reciente</h3>
          <Link
            to="/dashboard/automation"
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
          >
            Ver todo <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {loadingData ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 rounded-full border-2 border-white/20 border-t-blue-400 animate-spin" />
          </div>
        ) : runs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center px-6">
            <Clock className="h-8 w-8 text-slate-600 mb-3" />
            <p className="text-sm text-slate-400">Aún no hay ejecuciones registradas.</p>
            <p className="text-xs text-slate-600 mt-1">
              Aparecerán aquí cuando Low procese tus primeros correos.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {runs.map((run) => (
              <div key={run.id} className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white">
                      {run.emails_scanned} correos — {run.invoices_found} facturas
                    </p>
                    <p className="text-xs text-slate-500">
                      {new Date(run.run_at).toLocaleString('es-CO', {
                        day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
                <Badge variant={run.status === 'success' ? 'active' : run.status === 'error' ? 'error' : 'pending'}>
                  {run.status === 'success' ? 'Exitoso' : run.status === 'error' ? 'Error' : 'Parcial'}
                </Badge>
              </div>
            ))}
          </div>
        )}

        {lastName && (
          <div className="px-6 py-3 border-t border-white/5">
            <p className="text-xs text-slate-500">
              Última ejecución:{' '}
              {new Date(lastName).toLocaleString('es-CO', {
                day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
              })}
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

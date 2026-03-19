import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { Zap, Mail, ArrowRight, RefreshCw } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import type { AutomationRun, EmailConnection } from '../../types'
import Badge from '../../components/ui/Badge'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
}

export default function AutomationPage() {
  const { user } = useAuth()
  const [runs, setRuns] = useState<AutomationRun[]>([])
  const [connection, setConnection] = useState<EmailConnection | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    if (!user) return
    setLoading(true)
    const [runsRes, connRes] = await Promise.all([
      supabase
        .from('automation_runs')
        .select('*')
        .eq('user_id', user.id)
        .order('run_at', { ascending: false })
        .limit(50),
      supabase
        .from('email_connections')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'active')
        .maybeSingle(),
    ])
    if (runsRes.data) setRuns(runsRes.data as AutomationRun[])
    if (connRes.data) setConnection(connRes.data as EmailConnection)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [user])

  const automationStatus = !connection
    ? 'pending'
    : runs.length === 0
    ? 'active'
    : runs[0].status === 'error'
    ? 'error'
    : 'active'

  const statusLabel = {
    active: 'Activo',
    pending: 'Pendiente de conexión',
    error: 'Error en última ejecución',
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-4xl"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white font-[Outfit]">Mi Automatización</h2>
          <p className="mt-1 text-sm text-slate-400">Cleo Junior</p>
        </div>
        <button
          onClick={fetchData}
          disabled={loading}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          Actualizar
        </button>
      </motion.div>

      {/* Status card */}
      <motion.div variants={itemVariants} className="glass-dark rounded-2xl border border-white/5 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Zap className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Cleo Junior</h3>
              <p className="text-sm text-slate-400 mt-0.5">Extracción automática de facturas y pagos</p>
            </div>
          </div>
          <Badge variant={automationStatus as 'active' | 'pending' | 'error'}>
            {statusLabel[automationStatus as keyof typeof statusLabel]}
          </Badge>
        </div>

        {/* Connection info */}
        <div className="mt-6 pt-5 border-t border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-slate-500" />
              <span className="text-slate-400">Cuenta conectada:</span>
              <span className={connection ? 'text-white font-medium' : 'text-slate-500 italic'}>
                {connection ? connection.email_address : 'Sin cuenta conectada'}
              </span>
            </div>
            {!connection && (
              <Link
                to="/connect-email"
                className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Conectar <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Plan details */}
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          {[
            { label: 'Correos/mes', value: '200' },
            { label: 'Tipo de acceso', value: 'Solo lectura' },
            { label: 'Plan', value: 'Junior' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-xl bg-white/5 px-3 py-3">
              <p className="text-xs text-slate-500">{label}</p>
              <p className="text-sm font-semibold text-white mt-1">{value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Runs table */}
      <motion.div variants={itemVariants} className="glass-dark rounded-2xl border border-white/5">
        <div className="px-6 py-4 border-b border-white/5">
          <h3 className="text-sm font-semibold text-white">Historial de ejecuciones</h3>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 rounded-full border-2 border-white/20 border-t-blue-400 animate-spin" />
          </div>
        ) : runs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center px-6">
            <Zap className="h-8 w-8 text-slate-600 mb-3" />
            <p className="text-sm text-slate-400">No hay ejecuciones aún.</p>
            <p className="text-xs text-slate-600 mt-1">
              {connection
                ? 'Low procesará tus correos automáticamente en la próxima ejecución programada.'
                : 'Conecta tu correo para activar la automatización.'}
            </p>
          </div>
        ) : (
          <>
            {/* Table header */}
            <div className="grid grid-cols-4 gap-4 px-6 py-3 border-b border-white/5 text-xs text-slate-500 uppercase tracking-wide">
              <span>Fecha</span>
              <span className="text-center">Correos</span>
              <span className="text-center">Facturas</span>
              <span className="text-right">Estado</span>
            </div>

            <div className="divide-y divide-white/5">
              {runs.map((run) => (
                <div key={run.id} className="grid grid-cols-4 gap-4 px-6 py-4 items-center">
                  <span className="text-sm text-slate-300">
                    {new Date(run.run_at).toLocaleString('es-CO', {
                      day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
                    })}
                  </span>
                  <span className="text-sm text-white text-center font-medium">{run.emails_scanned}</span>
                  <span className="text-sm text-white text-center font-medium">{run.invoices_found}</span>
                  <div className="flex justify-end">
                    <Badge variant={run.status === 'success' ? 'active' : run.status === 'error' ? 'error' : 'pending'}>
                      {run.status === 'success' ? 'Exitoso' : run.status === 'error' ? 'Error' : 'Parcial'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

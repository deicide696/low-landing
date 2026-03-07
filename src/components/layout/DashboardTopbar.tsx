import { useLocation, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Menu, Bell } from 'lucide-react'

const routeLabels: Record<string, string> = {
  '/dashboard': 'Inicio',
  '/dashboard/automation': 'Mi Automatización',
  '/connect-email': 'Conectar Correo',
}

export default function DashboardTopbar() {
  const { user } = useAuth()
  const location = useLocation()
  const pageTitle = routeLabels[location.pathname] ?? 'Dashboard'

  const initials = user?.email
    ? user.email.slice(0, 2).toUpperCase()
    : '??'

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-slate-900/40 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-4">
        {/* Mobile menu placeholder */}
        <button className="lg:hidden text-slate-400 hover:text-white transition-colors">
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-base font-semibold text-white font-[Outfit]">{pageTitle}</h1>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 border border-blue-500/20">
          Junior
        </span>

        <button className="text-slate-400 hover:text-white transition-colors relative">
          <Bell className="h-4 w-4" />
        </button>

        <Link
          to="/dashboard"
          className="h-8 w-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-xs font-semibold text-blue-400 hover:bg-blue-500/30 transition-colors"
        >
          {initials}
        </Link>
      </div>
    </header>
  )
}

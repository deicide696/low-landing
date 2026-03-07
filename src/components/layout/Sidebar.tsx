import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Zap, Mail } from 'lucide-react'
import Logo from '../Logo'
import { useAuth } from '../../contexts/AuthContext'
import { clsx } from 'clsx'

const navItems = [
  { to: '/dashboard', label: 'Inicio', icon: LayoutDashboard, end: true },
  { to: '/dashboard/automation', label: 'Mi Automatización', icon: Zap, end: false },
  { to: '/connect-email', label: 'Conectar Correo', icon: Mail, end: false },
]

export default function Sidebar() {
  const { user, signOut } = useAuth()

  const initials = user?.email
    ? user.email.slice(0, 2).toUpperCase()
    : '??'

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-slate-900/60 backdrop-blur-md border-r border-white/5">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 px-6 border-b border-white/5">
        <Logo className="w-20" imgClassName="object-contain w-full h-full brightness-0 invert" />
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all',
                isActive
                  ? 'bg-blue-500/10 text-blue-400 border-l-2 border-blue-400 pl-[10px]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5',
              )
            }
          >
            <Icon className="h-4 w-4 flex-shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* User footer */}
      <div className="px-3 py-4 border-t border-white/5">
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl">
          <div className="h-8 w-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-xs font-semibold text-blue-400">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-slate-400 truncate">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={signOut}
          className="mt-2 w-full text-left px-3 py-2 text-xs text-slate-500 hover:text-slate-300 transition-colors rounded-xl hover:bg-white/5"
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  )
}

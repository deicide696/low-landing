import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import DashboardTopbar from './DashboardTopbar'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Grid background */}
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
      {/* Gradient blob */}
      <div className="fixed top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-blue-500/10 to-transparent blur-3xl pointer-events-none" />

      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen relative">
        <DashboardTopbar />
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

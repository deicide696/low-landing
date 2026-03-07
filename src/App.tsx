import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AuthCallbackPage from './pages/AuthCallbackPage'
import EmailCallbackPage from './pages/EmailCallbackPage'
import ProtectedRoute from './guards/ProtectedRoute'
import GuestRoute from './guards/GuestRoute'
import AppLayout from './components/layout/AppLayout'
import DashboardPage from './pages/dashboard/DashboardPage'
import AutomationPage from './pages/dashboard/AutomationPage'
import ConnectEmailPage from './pages/dashboard/ConnectEmailPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/callback" element={<AuthCallbackPage />} />
      <Route path="/auth/email-callback" element={<EmailCallbackPage />} />

      <Route element={<GuestRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/automation" element={<AutomationPage />} />
          <Route path="/connect-email" element={<ConnectEmailPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

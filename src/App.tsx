import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
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
import SmokeyPage from './pages/SmokeyPage'
import LexiconPage from './pages/LexiconPage'
import TalamaPage from './pages/TalamaPage'
import CharliePage from './pages/CharliePage'

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/auxiliar-administrativo" element={<LandingPage />} />
          <Route path="/smokey" element={<SmokeyPage />} />
          <Route path="/lexicon" element={<LexiconPage />} />
          <Route path="/talama" element={<TalamaPage />} />
          <Route path="/charlie" element={<CharliePage />} />
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
      </AnimatePresence>
    </>
  )
}

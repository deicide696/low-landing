import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Instant scroll for route changes (smooth feels laggy on full page transitions)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

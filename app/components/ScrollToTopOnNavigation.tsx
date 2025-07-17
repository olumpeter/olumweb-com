import { useEffect } from 'react'
import { useLocation } from 'react-router'

export function ScrollToTopOnNavigation() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return null
}

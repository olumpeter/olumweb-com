import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function FloatingScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    function handleScrollToTop() {
      const y = window.scrollY
      setIsVisible(y > 300)
    }

    window.addEventListener('scroll', handleScrollToTop)

    return () =>
      window.removeEventListener('scroll', handleScrollToTop)
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={handleScrollToTop}
      className="
          fixed bottom-6 right-6 z-40 p-3 bg-blue-600 text-white 
          rounded-full shadow-md hover:bg-blue-700 transition"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
      <span className="sr-only">Scroll to top</span>
    </button>
  )
}

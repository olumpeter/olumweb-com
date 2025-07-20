import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function FloatingScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false)

	function handleScrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		if (typeof window === 'undefined') return

		function handleScrollToTop() {
			const y = window.scrollY
			setIsVisible(y > 300)
		}

		window.addEventListener('scroll', handleScrollToTop)

		return () => window.removeEventListener('scroll', handleScrollToTop)
	}, [])

	if (!isVisible) return null

	return (
		<button
			onClick={handleScrollToTop}
			className='fixed right-6 bottom-6 z-40 rounded-full bg-blue-600 p-3 text-white shadow-md transition hover:bg-blue-700'
			aria-label='Scroll to top'
		>
			<ArrowUp size={20} />
			<span className='sr-only'>Scroll to top</span>
		</button>
	)
}

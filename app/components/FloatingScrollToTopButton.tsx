import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function FloatingScrollToTopButton() {
	const [scrollY, setScrollY] = useState(0)
	const scrollToTopButtonVisible = scrollY > 300

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		if (typeof window === 'undefined') return

		function updateScrollY() {
			setScrollY(window.scrollY)
		}

		window.addEventListener('scroll', updateScrollY)

		return () => window.removeEventListener('scroll', updateScrollY)
	}, [])

	return (
		scrollToTopButtonVisible && (
			<button
				className='fixed right-6 bottom-6 z-40 rounded-full bg-blue-600 p-3 text-white shadow-md transition hover:bg-blue-700'
				aria-label='Scroll to the top of the page'
				onClick={scrollToTop}
			>
				<ArrowUp size={20} />
				<span className='sr-only'>Scroll to the top of the page</span>
			</button>
		)
	)
}

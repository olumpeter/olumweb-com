import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'

export function useShouldShowBreadcrumbs() {
	const location = useLocation()
	const segments = location.pathname.split('/').filter(Boolean)
	return segments.length >= 2
}

export default function Breadcrumbs() {
	const location = useLocation()
	const segments = location.pathname.split('/').filter(Boolean)

	// Hide breadcrumbs on shallow routes ("/", "/about", etc.)
	if (segments.length < 2) return null

	const crumbs = segments.map((seg, i) => ({
		label: decodeURIComponent(seg)
			.replace(/-/g, ' ')
			.replace(/\b\w/g, l => l.toUpperCase()),
		href: '/' + segments.slice(0, i + 1).join('/'),
		isLast: i === segments.length - 1,
	}))

	const scrollRef = useRef<HTMLDivElement | null>(null)

	const [isScrollable, setIsScrollable] = useState(false)
	const [atStart, setAtStart] = useState(true)
	const [atEnd, setAtEnd] = useState(false)

	useEffect(() => {
		function update() {
			const el = scrollRef.current
			if (!el) return

			const scrollable = el.scrollWidth > el.clientWidth
			setIsScrollable(scrollable)
			setAtStart(el.scrollLeft === 0)
			setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
		}

		update()
		window.addEventListener('resize', update)

		const el = scrollRef.current
		el?.addEventListener('scroll', update)

		return () => {
			window.removeEventListener('resize', update)
			el?.removeEventListener('scroll', update)
		}
	}, [])

	return (
		<nav aria-label='Breadcrumb'>
			<div
				ref={scrollRef}
				className={[
					'scrollbar-none overflow-x-auto whitespace-nowrap px-1',
					'text-xs sm:text-sm text-(--color-foreground-muted)',
					isScrollable &&
						'gradient(to_right,transparent,black_12px,black_calc(100%-12px),transparent)]',
					(!isScrollable || (atStart && atEnd)) && '[mask:none]',
				]
					.filter(Boolean)
					.join(' ')}
			>
				<ol className='flex items-center gap-1'>
					<li>
						<Link
							to='/'
							className='transition-colors hover:text-(--color-primary)
								focus-visible:outline-none focus-visible:ring-2
								focus-visible:ring-(--color-primary) focus-visible:ring-offset-2
								focus-visible:ring-offset-(--color-background)'
						>
							Home
						</Link>
					</li>

					{crumbs.map(c => (
						<li
							key={c.href}
							className='flex items-center gap-1'
						>
							<span className='text-(--color-foreground-muted)/50'>/</span>

							{c.isLast ? (
								<span
									className='max-w-[140px] truncate font-medium
										text-(--color-foreground) sm:max-w-none'
								>
									{c.label}
								</span>
							) : (
								<Link
									to={c.href}
									className='max-w-[120px] truncate transition-colors
										hover:text-(--color-primary) hover:underline
										focus-visible:outline-none focus-visible:ring-2
										focus-visible:ring-(--color-primary)
										focus-visible:ring-offset-2
										focus-visible:ring-offset-(--color-background)
										sm:max-w-none'
								>
									{c.label}
								</Link>
							)}
						</li>
					))}
				</ol>
			</div>
		</nav>
	)
}

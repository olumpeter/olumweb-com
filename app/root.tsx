import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Links, Link, Outlet, Scripts, ScrollRestoration } from 'react-router'

import '~/styles/app.css'
import Logo from './components/Logo'

import Breadcrumbs, { useShouldShowBreadcrumbs } from '~/components/Breadcrumbs'

export function links() {
	return [
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossOrigin: 'anonymous',
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300..900&display=swap',
		},
	]
}

function Document({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			// data-theme='dark'
		>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<title>Olum Web</title>
				<Links />
			</head>
			<body
				className='antialiased bg-(--color-background)
					text-(--color-foreground)'
			>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

function Layout({ children }: { children: React.ReactNode }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const shouldShowBreadcrumbs = useShouldShowBreadcrumbs()

	const closeMobileMenu = () => setIsMobileMenuOpen(false)
	const toggleMobileMenu = () => setIsMobileMenuOpen(open => !open)

	// Body scroll lock (with cleanup)
	useEffect(() => {
		document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [isMobileMenuOpen])

	// Escape key closes drawer
	useEffect(() => {
		if (!isMobileMenuOpen) return

		function onKey(e: KeyboardEvent) {
			if (e.key === 'Escape') closeMobileMenu()
		}

		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [isMobileMenuOpen])

	// Swipe-to-close (mobile)
	const startX = useRef<number | null>(null)

	const handleTouchStart = (e: React.TouchEvent) => {
		startX.current = e.touches[0].clientX
	}

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!startX.current) return
		const delta = e.touches[0].clientX - startX.current
		if (delta > 60) {
			closeMobileMenu()
			startX.current = null
		}
	}

	return (
		<div className='relative flex min-h-screen flex-col'>
			{/* HEADER */}
			<header
				className='sticky top-0 z-(--z-header) border-b border-(--color-outline)
					bg-(--color-surface) backdrop-blur'
			>
				<div
					className='mx-auto flex h-14 max-w-6xl items-center justify-between
						px-(--page-padding-inline)'
				>
					<Link
						to='/'
						onClick={closeMobileMenu}
						aria-label='Go to homepage'
						className='inline-flex h-8 items-center justify-center rounded-md
							px-2 text-(--color-foreground) no-underline
							hover:bg-(--color-outline) active:bg-transparent
							focus-visible:outline-none focus-visible:ring-2
							focus-visible:ring-(--color-outline)
							[-webkit-tap-highlight-color:transparent]'
					>
						<Logo className='h-5 w-auto pointer-events-none' />
					</Link>

					{/* Desktop navigation */}
					<nav className='hidden md:flex items-center gap-6 text-sm'>
						<Link
							to='/learn'
							className='text-(--color-foreground-muted)
								hover:text-(--color-foreground)'
						>
							All Learning Paths
						</Link>

						<Link
							to='/about'
							className='text-(--color-foreground-muted)
								hover:text-(--color-foreground)'
						>
							About
						</Link>
					</nav>

					{/* Mobile menu toggle */}
					<button
						onClick={toggleMobileMenu}
						aria-label='Open menu'
						aria-expanded={isMobileMenuOpen}
						className='md:hidden inline-flex h-8 w-8 items-center justify-center
							rounded-md text-(--color-foreground-muted)
							hover:bg-(--color-outline)'
					>
						{isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
					</button>
				</div>
			</header>

			{/* BREADCRUMBS */}
			{shouldShowBreadcrumbs && (
				<div className='border-b border-(--color-outline) bg-(--color-card)'>
					<div
						className='mx-auto max-w-6xl px-(--page-padding-inline) py-3
							sm:py-2'
					>
						<Breadcrumbs />
					</div>
				</div>
			)}

			{/* MAIN CONTENT */}
			<main className='flex-1 bg-(--color-surface)'>{children}</main>

			{/* FOOTER */}
			<footer
				className='border-t border-(--color-outline) bg-(--color-surface)
					text-xs text-(--color-foreground-muted)'
			>
				<div
					className='mx-auto max-w-6xl px-(--page-padding-inline) py-4
						text-center'
				>
					© {new Date().getFullYear()} Olum Web
				</div>
			</footer>

			{/* MOBILE OVERLAY */}
			<div
				className={`fixed inset-0 z-(--z-overlay) bg-(--color-overlay)
					backdrop-blur-sm transition-opacity duration-200 lg:hidden
					${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
				onClick={closeMobileMenu}
			/>

			{/* MOBILE DRAWER */}
			<aside
				role='dialog'
				aria-modal='true'
				aria-label='Mobile navigation'
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				className={`fixed top-14 bottom-0 left-0 z-(--z-drawer)
					w-[min(85vw,20rem)] border-r border-(--color-outline)
					bg-(--color-background) transition-transform duration-300
					ease-[cubic-bezier(.32,.72,0,1)] lg:hidden
					${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<nav
					role='menu'
					className='px-(--page-padding-inline) py-6'
				>
					<ul className='space-y-0.5'>
						{/* All Learning Paths */}
						<li
							role='menuitem'
							className='relative rounded-md before:pointer-events-none
								before:absolute before:inset-y-0 before:left-1 before:right-1
								before:rounded-md before:bg-(--surface-subtle) before:opacity-0
								before:transition-opacity before:duration-200
								hover:before:opacity-100 focus-visible:before:opacity-100
								focus-visible:outline-none'
						>
							<Link
								to='/learn'
								onClick={closeMobileMenu}
								className='relative z-10 block w-full px-3 py-2 text-sm
									text-(--color-foreground-muted) no-underline
									hover:no-underline'
							>
								All Learning Paths
							</Link>
						</li>

						{/* About */}
						<li
							role='menuitem'
							className='relative rounded-md before:pointer-events-none
								before:absolute before:inset-y-0 before:left-1 before:right-1
								before:rounded-md before:bg-(--surface-subtle) before:opacity-0
								before:transition-opacity before:duration-200
								hover:before:opacity-100 focus-visible:before:opacity-100
								focus-visible:outline-none'
						>
							<Link
								to='/about'
								onClick={closeMobileMenu}
								className='relative z-10 block w-full px-3 py-2 text-sm
									text-(--color-foreground-muted) no-underline
									hover:no-underline'
							>
								About
							</Link>
						</li>
					</ul>
				</nav>
			</aside>
		</div>
	)
}

export default function App() {
	return (
		<Document>
			<Layout>
				<Outlet />
			</Layout>
		</Document>
	)
}

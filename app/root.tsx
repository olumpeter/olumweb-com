import { Menu, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import {
	isRouteErrorResponse,
	Link,
	Links,
	NavLink,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLocation,
} from 'react-router'

import type { Route } from './+types/root'

import '~/styles/app.css'
import faviconAssetUrl from '~/assets/favicons/favicon.svg?url'
import olumWebLogoAssetUrl from '~/assets/logos/olumWebLogo.png?url'

export function links() {
	return [
		{ rel: 'icon', type: 'image/svg+xml', href: faviconAssetUrl },
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossOrigin: 'anonymous',
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
		},
	]
}

/* -------------------------------------------------------------------------- */
/* 🧱 Document Wrapper                                                        */
/* -------------------------------------------------------------------------- */
function Document({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='h-full overflow-x-hidden'>
			<head>
				<title>Olum Web</title>
				<meta
					name='description'
					content='Learn how to Build a Fullstack UI with TypeScript, React, Tailwind CSS & React Router'
				/>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<Links />
			</head>
			<body className='min-h-screen font-sans antialiased'>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

/* -------------------------------------------------------------------------- */
/* 🧭 Layout: Sticky Header + Navigation + Footer                              */
/* -------------------------------------------------------------------------- */
function Layout({ children }: { children: React.ReactNode }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const location = useLocation()

	// 🧠 Close mobile menu when route changes
	useEffect(() => {
		setIsMobileMenuOpen(false)
	}, [location.pathname])

	// 🌫️ Add shadow on scroll
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 10)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navLinks = [
		{ to: '/', label: 'Home', end: true },
		{ to: '/series', label: 'Series' },
		{ to: '/about', label: 'About' },
	]

	return (
		<div className='flex min-h-screen flex-col bg-white text-gray-900'>
			<header
				className={`sticky top-0 z-40 w-full bg-blue-600 text-white transition-shadow ${
					isScrolled ? 'shadow-md' : ''
				}`}
			>
				<div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8'>
					{/* 🪶 Logo + Brand */}
					<Link
						to='/'
						className='flex flex-shrink-0 items-center gap-2 text-lg font-semibold hover:underline'
					>
						<span className='flex h-10 w-10 items-center justify-center rounded-full bg-white p-1 shadow-md'>
							<img
								src={olumWebLogoAssetUrl}
								alt='Olum Web Logo'
								className='h-full w-full object-contain transition-opacity duration-300 ease-in-out'
							/>
						</span>
						<span>Olum Web</span>
					</Link>

					{/* 💻 Desktop Navigation */}
					<nav className='hidden items-center gap-6 md:flex'>
						{navLinks.map(({ to, label, end }) => (
							<NavLink
								key={to}
								to={to}
								end={end}
								className={({ isActive }) =>
									`transition-colors duration-150 hover:text-yellow-100 ${
										isActive ? 'font-semibold text-yellow-300' : 'text-white'
									}`
								}
							>
								{label}
							</NavLink>
						))}

						{/* 🚀 CTA Button */}
						<Link
							to='/series/build-for-the-web'
							className='rounded bg-yellow-300 px-4 py-2 text-sm font-medium text-blue-800 hover:bg-yellow-400'
						>
							Start Learning
						</Link>
					</nav>

					{/* 📱 Mobile Menu Toggle */}
					<div className='flex items-center md:hidden'>
						<button
							onClick={() => setIsMobileMenuOpen(prev => !prev)}
							className={`group inline-flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-200 ease-in-out ${
								isMobileMenuOpen
									? 'border-white bg-blue-600 shadow-inner'
									: 'border-white/30 bg-transparent shadow-md hover:border-white hover:bg-blue-600 hover:shadow-lg'
							} hover:scale-105 focus:ring-2 focus:ring-yellow-300 focus:outline-none active:scale-95`}
							aria-label='Mobile Menu Toggle'
						>
							{isMobileMenuOpen ? (
								<X
									size={24}
									className='text-white group-hover:text-yellow-300'
								/>
							) : (
								<Menu
									size={24}
									className='text-white group-hover:text-yellow-300'
								/>
							)}
						</button>
					</div>
				</div>

				{/* 📱 Mobile Dropdown Menu */}
				{isMobileMenuOpen && (
					<div className='animate-slide-down w-full bg-blue-600 shadow-md md:hidden'>
						<nav className='flex flex-col divide-y divide-blue-400'>
							{navLinks.map(({ to, label, end }) => (
								<NavLink
									key={to}
									to={to}
									end={end}
									className={({ isActive }) =>
										`block px-4 py-3 text-sm transition-colors duration-200 ease-in-out ${
											isActive
												? 'bg-blue-700 font-semibold text-yellow-300'
												: 'text-white hover:bg-blue-700'
										}`
									}
								>
									{label}
								</NavLink>
							))}

							<Link
								to='/series/build-for-the-web'
								className='block px-4 py-3 text-sm font-semibold text-yellow-300 hover:bg-blue-700'
							>
								Start Learning 🚀
							</Link>
						</nav>
					</div>
				)}
			</header>

			<main className='flex-1 px-4 py-8 sm:px-6 lg:px-8'>{children}</main>

			<footer className='flex h-16 items-center justify-center gap-1 bg-blue-50 text-sm text-blue-700'>
				<span>&copy; {new Date().getFullYear()}</span>
				<Link to='/' className='font-medium hover:underline'>
					Olum Web
				</Link>
				<span>All rights reserved.</span>
			</footer>
		</div>
	)
}

/* -------------------------------------------------------------------------- */
/* ⚠️ Error Boundary                                                          */
/* -------------------------------------------------------------------------- */
export default function App() {
	return (
		<Document>
			<Layout>
				<Outlet />
			</Layout>
		</Document>
	)
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let title: string
	let description: string

	if (isRouteErrorResponse(error)) {
		title = `${error.status}: ${error.statusText}`
		description =
			error.status === 404
				? `The page you're looking for does not exist.`
				: error.statusText
	} else if (error instanceof Error) {
		title = 'Something went wrong'
		description = error.message
	} else {
		title = 'Unknown error'
		description = 'An unexpected error occurred.'
	}

	return (
		<Document>
			<Layout>
				<div className='flex flex-1 items-center justify-center px-6 py-16 text-center'>
					<div className='max-w-md'>
						<h1 className='mb-4 text-4xl font-bold text-blue-700'>{title}</h1>
						<p className='mb-6 text-lg text-gray-700'>{description}</p>
						<Link
							to='/'
							className='inline-block rounded bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700'
						>
							Go Home
						</Link>
						{error instanceof Error && (
							<pre className='mt-8 overflow-x-auto rounded border border-red-200 bg-red-50 p-4 text-left text-sm text-red-700'>
								<code>{error.stack}</code>
							</pre>
						)}
					</div>
				</div>
			</Layout>
		</Document>
	)
}

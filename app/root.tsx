import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import {
	isRouteErrorResponse,
	Link,
	Links,
	NavLink,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router'

import { FloatingScrollToTopButton } from './components/FloatingScrollToTopButton'
import { ScrollToTopOnNavigation } from './components/ScrollToTopOnNavigation'
import { SidebarProvider } from './context/SidebarContext'

import type { Route } from './+types/root'

import '~/styles/app.css'
import faviconAssetUrl from '~/assets/favicon.svg?url'
import logoAssetUrl from '~/assets/logo.png?url'

const headerNavLinkClass = ({ isActive }: { isActive: boolean }) =>
	[
		'block text-sm font-medium cursor-pointer leading-[64px] h-16 px-4 font-sans antialiased text-nowrap',
		isActive
			? 'text-yellow-300 font-semibold'
			: 'text-white hover:text-yellow-100',
	].join(' ')

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
	[
		'block px-4 py-3 text-sm border-b border-b-blue-400 transition-colors duration-200 ease-in-out',
		isActive
			? 'text-yellow-300 bg-blue-700 font-semibold'
			: 'text-white hover:bg-blue-700',
	].join(' ')

export function links() {
	return [
		{ rel: 'icon', type: 'image/svg+xml', href: faviconAssetUrl },
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
		},
	]
}

export function Document({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='h-full overflow-x-hidden'>
			<head>
				<title>Awesome Web Dev Exercises</title>
				<meta
					name='description'
					content='Learn how to Build a Fullstack UI with TypeScript, React, Tailwind CSS & React Router'
				/>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Links />
			</head>
			<body className='h-full font-sans'>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

function Layout({ children }: { children: React.ReactNode }) {
	const [isHeaderNavOpen, setIsHeaderNavOpen] = useState(false)

	return (
		<div className='flex flex-col min-h-screen bg-white text-gray-900'>
			<header className='z-40 h-16 bg-blue-600 text-white flex items-center justify-between px-6'>
				<Link
					to='/'
					className='flex items-center gap-2 text-lg font-semibold hover:underline'
				>
					<img
						src={logoAssetUrl}
						alt='Olum Web Logo'
						className='w-10 h-10 bg-white rounded-full p-1 shadow-md'
					/>
					<span>Olum Web</span>
				</Link>

				{/* Desktop Nav */}
				<nav className='hidden md:flex gap-4'>
					<NavLink
						to='/'
						end
						className={({ isActive }) => headerNavLinkClass({ isActive })}
						onClick={() => setIsHeaderNavOpen(false)}
					>
						Home
					</NavLink>
					<NavLink
						to='/exercises'
						className={({ isActive }) => headerNavLinkClass({ isActive })}
						onClick={() => setIsHeaderNavOpen(false)}
					>
						Exercises
					</NavLink>
				</nav>

				{/* Mobile Toggle */}
				<button
					className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border transition
          ${
						isHeaderNavOpen
							? 'border-white bg-blue-500'
							: 'border-white/30 hover:border-white hover:bg-blue-500 focus:border-white focus:bg-blue-500'
					}
          focus:outline-none focus:ring-2 focus:ring-white
        `}
					onClick={() => setIsHeaderNavOpen(prev => !prev)}
					aria-label='Toggle navigation'
				>
					{isHeaderNavOpen ? (
						<X
							size={24}
							className='text-white group-hover:text-white group-focus:text-white transition'
						/>
					) : (
						<Menu
							size={24}
							className='text-white group-hover:text-white group-focus:text-white transition'
						/>
					)}
				</button>

				{/* Mobile Dropdown Nav */}
				{isHeaderNavOpen && (
					<div
						className='
            absolute top-16 left-0 w-full z-30 md:hidden 
            bg-blue-600 
            shadow-md box-border
            transition-all duration-300 ease-in-out
          '
					>
						<nav className='flex flex-col divide-y divide-blue-400'>
							<NavLink
								to='/'
								end
								className={mobileNavLinkClass}
								onClick={() => setIsHeaderNavOpen(false)}
							>
								Home
							</NavLink>
							<NavLink
								to='/exercises'
								className={mobileNavLinkClass}
								onClick={() => setIsHeaderNavOpen(false)}
							>
								Exercises
							</NavLink>
						</nav>
					</div>
				)}
			</header>

			<main className='flex flex-1 px-4 sm:px-6 lg:px-8'>{children}</main>

			<footer className='h-16 bg-blue-50 text-blue-700 flex items-center justify-center text-sm'>
				&copy; 2025 Olum Web. All rights reserved.
			</footer>
		</div>
	)
}

export default function App() {
	return (
		<Document>
			<ScrollToTopOnNavigation />
			<SidebarProvider>
				<Layout>
					<Outlet />
				</Layout>
			</SidebarProvider>
			<FloatingScrollToTopButton />
		</Document>
	)
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	const title = isRouteErrorResponse(error)
		? error.status === 404
			? '404: Not Found'
			: `${error.status} ${error.statusText}`
		: 'Something went wrong'

	const description = isRouteErrorResponse(error)
		? error.status === 404
			? 'The page you’re looking for does not exist.'
			: error.statusText
		: error instanceof Error
			? error.message
			: 'Unknown error'

	return (
		<Document>
			<Layout>
				<div className='flex flex-1 items-center justify-center px-6 py-16 text-center'>
					<div className='max-w-md'>
						<h1 className='text-4xl font-bold text-blue-700 mb-4'>{title}</h1>
						<p className='text-lg text-gray-700 mb-6'>{description}</p>
						<Link
							to='/'
							className='inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition'
						>
							Go Home
						</Link>

						{error instanceof Error && (
							<pre className='mt-8 text-left text-sm text-red-700 bg-red-50 border border-red-200 rounded p-4 overflow-x-auto'>
								<code>{error.stack}</code>
							</pre>
						)}
					</div>
				</div>
			</Layout>
		</Document>
	)
}

import { ChevronDown, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router'

import { MobileSidebarToggle } from '~/components/MobileSidebarToggle'
import { ScrollHeaderContext } from '~/context/ScrollContext'
import { useSidebar } from '~/context/SidebarContext'

const sidebarNavLinkClass = ({ isActive }: { isActive: boolean }) =>
	[
		'block px-3 py-2 rounded-md text-sm font-medium transition',
		isActive
			? 'text-blue-700 font-semibold bg-blue-100'
			: 'text-blue-600 hover:bg-blue-50',
	].join(' ')

export default function Exercises() {
	const [hasScrolledPastHeader, setHasScrolledPastHeader] = useState(false)
	const { isSidebarOpen, setIsSidebarOpen } = useSidebar()

	const [openSections, setOpenSections] = useState<Record<string, boolean>>({
		javascriptExercises: true,
	})

	useEffect(() => {
		if (typeof window === 'undefined') return

		function handleScroll() {
			setHasScrolledPastHeader(window.scrollY >= 64)
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Run once on mount in browser

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	function toggleSection(section: string) {
		setOpenSections(prev => ({
			...prev,
			[section]: !prev[section],
		}))
	}

	return (
		<ScrollHeaderContext.Provider value={hasScrolledPastHeader}>
			<div className='relative w-full'>
				{/* Mobile Top Bar */}
				<div
					className={`fixed left-0 z-30 flex h-12 w-screen items-center justify-between border-b bg-white px-4 py-3 md:hidden ${
						hasScrolledPastHeader ? 'top-0 shadow-sm' : 'top-[64px]'
					}`}
				>
					<MobileSidebarToggle />
				</div>

				{/* Backdrop Blur Overlay */}
				{isSidebarOpen && (
					<div
						className='fixed inset-0 z-10 bg-black/50 backdrop-blur-sm md:hidden'
						onClick={() => setIsSidebarOpen(false)}
						aria-hidden='true'
					/>
				)}

				{/* Sidebar */}
				<aside
					className={`fixed left-0 z-20 h-[calc(100vh-112px)] w-64 shrink-0 transform overflow-y-auto border-r border-gray-200 bg-slate-50 px-5 py-6 transition-transform duration-300 ease-in-out md:static md:h-auto ${
						isSidebarOpen
							? hasScrolledPastHeader
								? 'top-[48px]'
								: 'top-[112px]'
							: '-translate-x-full'
					} ${isSidebarOpen ? 'translate-x-0' : ''} md:block md:translate-x-0`}
				>
					<nav className='space-y-3'>
						<div>
							<button
								onClick={() => toggleSection('javascriptExercises')}
								className='mb-1 flex w-full items-center justify-between font-semibold text-gray-600'
							>
								<span>JavaScript Exercises</span>
								{openSections.javascriptExercises ? (
									<ChevronDown size={16} />
								) : (
									<ChevronRight size={16} />
								)}
							</button>

							{openSections.javascriptExercises && (
								<ul className='space-y-3'>
									<li>
										<NavLink
											to='/exercises/what-is-javascript'
											className={sidebarNavLinkClass}
											onClick={() => setIsSidebarOpen(false)}
										>
											What is JavaScript?
										</NavLink>
									</li>
								</ul>
							)}
						</div>
					</nav>
				</aside>

				{/* Main Content */}
				<main
					className={`relative mx-auto max-w-screen-lg flex-1 px-4 py-10 pt-16 transition-all duration-300 ease-in-out sm:px-6 md:pt-0 lg:px-8 ${
						isSidebarOpen ? 'ml-64 md:ml-0' : ''
					}`}
				>
					<Outlet />
				</main>
			</div>
		</ScrollHeaderContext.Provider>
	)
}

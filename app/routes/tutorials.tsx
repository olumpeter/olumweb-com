import { Outlet, NavLink } from 'react-router'

export default function TutorialsLayout() {
	return (
		<div className='min-h-screen bg-white text-gray-900'>
			<div className='mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8'>
				{/* Tutorials Header */}
				<header className='mb-8 border-b border-gray-200 pb-4'>
					<h1 className='text-3xl font-bold text-blue-700 sm:text-4xl'>
						Tutorials
					</h1>
					<p className='mt-2 text-gray-600'>
						Explore hands-on tutorials to learn modern fullstack development.
					</p>

					{/* Tutorials Nav */}
					<nav className='mt-4 flex flex-wrap gap-4 text-sm sm:gap-6'>
						<NavLink
							to='/tutorials'
							end
							className={({ isActive }) =>
								[
									'rounded-md px-3 py-2 font-medium transition-colors',
									isActive
										? 'bg-blue-100 text-blue-700'
										: 'text-gray-700 hover:bg-blue-50 hover:text-blue-700',
								].join(' ')
							}
						>
							All Tutorials
						</NavLink>

						<NavLink
							to='/tutorials/build-for-the-web'
							className={({ isActive }) =>
								[
									'rounded-md px-3 py-2 font-medium transition-colors',
									isActive
										? 'bg-blue-100 text-blue-700'
										: 'text-gray-700 hover:bg-blue-50 hover:text-blue-700',
								].join(' ')
							}
						>
							Build for the Web
						</NavLink>
					</nav>
				</header>

				{/* Nested route outlet */}
				<Outlet />
			</div>
		</div>
	)
}

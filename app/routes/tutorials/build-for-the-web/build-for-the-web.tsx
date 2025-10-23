import { Outlet } from 'react-router'

export default function BuildForTheWebLayout() {
	return (
		<div className='space-y-8'>
			<header className='mb-6 border-b pb-2'>
				<h1 className='text-3xl font-bold text-blue-700'>Build for the Web</h1>
				<p className='text-gray-600'>
					A hands-on series for beginners to learn modern web development.
				</p>
			</header>

			<Outlet />
		</div>
	)
}

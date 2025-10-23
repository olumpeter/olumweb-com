import { Link } from 'react-router'

export default function TutorialsIndex() {
	return (
		<div className='mx-auto max-w-3xl px-4 py-10 text-center'>
			<h1 className='mb-4 text-3xl font-bold text-blue-700 sm:text-4xl'>
				Tutorials
			</h1>

			<p className='mb-8 text-lg text-gray-700'>
				Practical web development tutorials — learn by building real projects.
			</p>

			<div className='space-y-4'>
				<Link
					to='/tutorials/build-for-the-web'
					className='block rounded-lg border border-gray-200 bg-blue-50 p-5 text-left shadow-sm transition hover:bg-blue-100'
				>
					<h2 className='text-xl font-semibold text-blue-700'>
						Build for the Web
					</h2>
					<p className='text-gray-600'>
						Learn fullstack development with TypeScript, React Router, Tailwind
						CSS, and Node.js.
					</p>
				</Link>
			</div>
		</div>
	)
}

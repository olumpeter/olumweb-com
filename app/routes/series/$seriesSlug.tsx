import { Link, useParams } from 'react-router'

export default function SeriesDetail() {
	const { seriesSlug } = useParams()

	const seriesData: Record<
		string,
		{
			title: string
			description: string
			tutorials: {
				number: string
				title: string
				path: string
				description?: string
			}[]
		}
	> = {
		'build-for-the-web': {
			title: 'Build for the Web',
			description:
				'A hands-on series guiding you through modern web development using TypeScript, React, Tailwind CSS, and React Router Framework Mode.',
			tutorials: [
				{
					number: '001',
					title: 'Hello World App',
					path: '/tutorials/build-for-the-web/001/hello-world-app',
					description:
						'Your first step into the modern web — building a Hello World app from scratch.',
				},
			],
		},
	}

	const series = seriesData[seriesSlug ?? '']

	if (!series) {
		return (
			<main className='mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8'>
				<h1 className='mb-4 text-3xl font-bold text-red-600'>
					404 — Series Not Found
				</h1>
				<p className='text-gray-600'>
					We couldn’t find a series called <code>{seriesSlug}</code>.
				</p>
				<Link
					to='/series'
					className='mt-6 inline-block rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700'
				>
					Back to All Series
				</Link>
			</main>
		)
	}

	return (
		<main className='mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8'>
			<header className='mb-8'>
				<h1 className='text-3xl font-bold text-blue-700 sm:text-4xl'>
					{series.title}
				</h1>
				<p className='mt-2 text-gray-700'>{series.description}</p>
			</header>

			<section>
				<h2 className='mb-4 text-xl font-semibold text-gray-800'>Tutorials</h2>
				<ul className='space-y-4'>
					{series.tutorials.map(t => (
						<li
							key={t.number}
							className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md'
						>
							<Link
								to={t.path}
								className='block text-blue-600 hover:text-blue-700'
							>
								<h3 className='text-lg font-semibold'>
									{t.number} — {t.title}
								</h3>
								{t.description && (
									<p className='mt-1 text-sm text-gray-600'>{t.description}</p>
								)}
							</Link>
						</li>
					))}
				</ul>
			</section>

			<footer className='mt-10 text-center'>
				<Link
					to='/series'
					className='inline-block rounded bg-gray-100 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-200'
				>
					← Back to All Series
				</Link>
			</footer>
		</main>
	)
}

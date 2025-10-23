import { Link } from 'react-router'

export default function SeriesIndex() {
	const seriesList = [
		{
			slug: 'build-for-the-web',
			title: 'Build for the Web',
			description:
				'A beginner-friendly series teaching you modern web development from the ground up using TypeScript, React, Tailwind CSS, and React Router.',
			color: 'bg-blue-50 text-blue-700',
		},
		// You can add more series here later...
	]

	return (
		<main className='mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8'>
			<h1 className='mb-6 text-3xl font-bold text-blue-700 sm:text-4xl'>
				All Learning Series
			</h1>

			<p className='mb-8 text-gray-700'>
				Each series is a structured path designed to help you go from beginner
				to confident builder — with hands-on projects and clear explanations.
			</p>

			<div className='grid gap-6 sm:grid-cols-2'>
				{seriesList.map(series => (
					<Link
						key={series.slug}
						to={`/series/${series.slug}`}
						className={`block rounded-lg border border-gray-200 ${series.color} p-6 shadow-sm transition hover:shadow-md`}
					>
						<h2 className='mb-2 text-xl font-semibold'>{series.title}</h2>
						<p className='text-sm text-gray-700'>{series.description}</p>
					</Link>
				))}
			</div>
		</main>
	)
}

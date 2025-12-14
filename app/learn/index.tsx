import { Link } from 'react-router'

const COURSES = [
	{
		slug: 'build-for-the-web',
		title: 'Build for the Web',
		description:
			'A practical, project-first path that teaches you how to build real, modern web applications using React Router, TypeScript, Tailwind CSS, Node.js, and SQLite.',
	},
]

export default function LearnIndex() {
	return (
		<div
			className='mx-auto w-full max-w-6xl px-(--page-padding-inline) pb-24
				pt-16'
		>
			{/* HEADER */}
			<header className='flex flex-col items-center text-center mb-12'>
				<p
					className='uppercase text-xs tracking-widest font-medium from-blue-500
						to-fuchsia-600 bg-clip-text text-transparent'
				>
					Practical Learning Paths
				</p>

				<h1
					className='mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold
						leading-tight tracking-[-0.02em] text-(--color-foreground)'
				>
					Become a Modern Web Developer
				</h1>

				<p
					className='mt-4 max-w-xl text-(--color-text-soft) text-base sm:text-lg
						leading-relaxed'
				>
					Hands-on, exercise-driven courses designed to help you build real
					applications with clarity, confidence, and modern best practices.
				</p>
			</header>

			{/* COURSE GRID */}
			<ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{COURSES.map(course => (
					<li key={course.slug}>
						<Link
							to={course.slug}
							className='flex flex-col h-full rounded-md border border-outline
								bg-(--surface-subtle) p-6 shadow-sm transition
								hover:brightness-[1.04] no-underline hover:no-underline'
						>
							{/* TITLE */}
							<h3
								className='text-2xl font-semibold tracking-tight
									text-(--color-foreground)'
							>
								{course.title}
							</h3>

							{/* DESCRIPTION */}
							<p
								className='mt-3 text-(--color-text-soft) leading-relaxed
									text-[0.97rem]'
							>
								{course.description}
							</p>

							{/* CTA inside card */}
							<div className='mt-6'>
								<span
									className='inline-flex items-center text-sm font-medium
										text-(--color-primary) no-underline hover:no-underline'
								>
									Start learning →
								</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

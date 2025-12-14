import { Link } from 'react-router'

export default function About() {
	return (
		<div className='mx-auto max-w-3xl px-(--page-padding-inline) py-20'>
			<h1
				className='text-(--color-foreground) font-semibold
					text-[clamp(1.8rem,4vw,2.75rem)] leading-[clamp(2.2rem,4.5vw,3.2rem)]
					tracking-[-0.015em] mb-6'
			>
				About Olum Web
			</h1>

			<p
				className='text-[1.05rem] leading-relaxed text-(--color-text-soft)
					max-w-prose mb-4'
			>
				Every day as a developer is an opportunity to build something
				meaningful. But great work doesn't come from guessing. It comes from
				understanding the tools, patterns, and decisions that shape your app
				from day one.
			</p>

			<p
				className='text-[1.05rem] leading-relaxed text-(--color-text-soft)
					max-w-prose mt-4'
			>
				Olum Web exists to help you make those decisions with confidence.
				Through practical, project-first lessons with React Router, TypeScript,
				and Tailwind CSS, you'll learn the skills that actually matter when
				shipping real applications—not just tutorials that leave you stuck when
				it's time to build on your own.
			</p>

			<p
				className='text-[1.05rem] leading-relaxed text-(--color-text-soft)
					max-w-prose mt-4'
			>
				Everything here is designed to help you learn by building. Clear
				explanations, real projects, and a focus on solid foundations — so your
				apps (and your skills) can grow without collapsing under their own
				complexity.
			</p>

			<p
				className='text-[1.05rem] leading-relaxed text-(--color-text-soft)
					max-w-prose mt-4'
			>
				If you're ready to take the next step, build with intention, and level
				up the way you think about modern web development, you're in the right
				place.
			</p>

			{/* CTA */}
			<div className='pt-12 flex justify-center'>
				<Link
					to='/learn/build-for-the-web'
					className='inline-flex items-center justify-center rounded-[2.5rem]
						bg-(--surface-subtle) text-(--text-strong) h-11 px-5 text-[1.05rem]
						tracking-[-0.01em] transition duration-150 no-underline
						hover:no-underline hover:bg-(--surface-subtle-hover) focus:outline-1
						focus:outline-(--surface-subtle-hover) outline-offset-2'
				>
					Start learning
				</Link>
			</div>
		</div>
	)
}

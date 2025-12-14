import { Link, Outlet } from 'react-router'

export default function BuildForTheWebCourse() {
	return (
		<div className='mx-auto max-w-3xl px-(--page-padding-inline) py-16'>
			{/* COURSE INTRO */}
			<header>
				<h1
					className='text-2xl sm:text-3xl lg:text-4xl font-semibold
						tracking-tight leading-tight text-(--color-foreground)'
				>
					Build for the Web
				</h1>

				<p
					className='mt-5 text-[clamp(1rem,0.95rem+0.4vw,1.15rem)]
						leading-[1.65] text-(--color-text-soft) max-w-[65ch]'
				>
					A practical, beginner-friendly course that teaches you how the web
					really works — by building real things and understanding every
					decision you make along the way.
				</p>
			</header>

			{/* WHAT YOU'LL LEARN */}
			<section className='mt-16'>
				<h2
					className='text-sm font-semibold uppercase tracking-wide
						text-(--color-section-label)'
				>
					What this course covers
				</h2>

				<ul className='mt-4 space-y-3 text-(--color-text-soft) list-disc pl-5'>
					<li>How the web works at a fundamental level</li>
					<li>What happens when a user visits a URL</li>
					<li>Client vs server — and why the distinction matters</li>
					<li>How modern web apps are structured</li>
					<li>How to think like a web developer, not just write code</li>
				</ul>
			</section>

			{/* HOW THIS COURSE WORKS */}
			<section className='mt-16'>
				<h2
					className='text-sm font-semibold uppercase tracking-wide
						text-(--color-section-label)'
				>
					How this course works
				</h2>

				<p className='mt-4 text-(--color-text-soft) leading-[1.65] max-w-[65ch]'>
					This course is taught through short, focused lessons. Each lesson
					builds on the previous one and introduces ideas only when they are
					needed.
				</p>

				<p className='mt-4 text-(--color-text-soft) leading-[1.65] max-w-[65ch]'>
					There are no shortcuts, no magic, and no copy-paste solutions.
					Everything is explained with intention — so you understand not just
					<em> what</em> to do, but <em>why</em> you are doing it.
				</p>
			</section>

			{/* WHO THIS IS FOR */}
			<section className='mt-16'>
				<h2
					className='text-sm font-semibold uppercase tracking-wide
						text-(--color-section-label)'
				>
					Who this course is for
				</h2>

				<ul className='mt-4 space-y-3 text-(--color-text-soft) list-disc pl-5'>
					<li>Beginners who want a strong foundation</li>
					<li>Self-taught developers filling knowledge gaps</li>
					<li>Anyone tired of tutorials that skip the “why”</li>
				</ul>
			</section>

			{/* CTA */}
			<section className='mt-20'>
				<div className='rounded-md bg-(--surface-subtle) p-8 text-center'>
					<h3 className='text-lg font-medium text-(--color-foreground)'>
						Ready to start?
					</h3>

					<p className='mt-3 text-(--color-text-soft) max-w-[60ch] mx-auto'>
						Start with the first lesson and build your understanding of the web
						from the ground up.
					</p>

					<div className='mt-6'>
						<Link
							to='/learn/build-for-the-web/hello-world-app'
							className='inline-flex items-center justify-center rounded-md px-5
								py-2.5 text-sm font-medium bg-(--surface-subtle-hover)
								text-(--text-strong) no-underline hover:no-underline'
						>
							Start Lesson 1 →
						</Link>
					</div>
				</div>
			</section>

			{/* LESSON OUTLET */}
			<Outlet />
		</div>
	)
}

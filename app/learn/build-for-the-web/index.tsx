import { Link } from 'react-router'

import {
	lessonRegistry,
	type LessonSlug,
} from '~/learn/build-for-the-web/lessonRegistry'

export default function BuildForTheWebIndex() {
	const lessons = Object.entries(lessonRegistry).filter(
		([_, lesson]) => lesson.frontmatter.published,
	)

	return (
		<div className='mx-auto max-w-3xl px-(--page-padding-inline) py-16'>
			{/* PAGE INTRO */}
			<header className='mb-16'>
				<h1 className='text-2xl font-semibold tracking-tight text-(--color-foreground) sm:text-3xl lg:text-4xl'>
					Build for the Web
				</h1>

				<p className='mt-5 max-w-[65ch] text-[clamp(1rem,0.95rem+0.4vw,1.15rem)] leading-[1.65] text-(--color-text-soft)'>
					A practical, beginner-friendly course that teaches you how the web
					really works — by building real things and understanding every
					decision you make along the way.
				</p>
			</header>

			{/* LESSON GRID */}
			<ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-2'>
				{lessons.map(([slug, lesson]) => {
					const typedSlug = slug as LessonSlug

					return (
						<li key={typedSlug}>
							<Link
								to={`/learn/build-for-the-web/${typedSlug}`}
								className='group block overflow-hidden rounded-xl border border-(--border-subtle) bg-(--surface-subtle) no-underline transition hover:-translate-y-0.5 hover:border-(--border-strong) hover:shadow-sm focus-visible:ring-2 focus-visible:ring-(--border-strong) focus-visible:outline-none'
							>
								{/* THUMBNAIL */}
								<div className='relative aspect-3/3 overflow-hidden rounded-lg bg-(--surface-subtle-hover) p-3'>
									<img
										src={lesson.thumbnail}
										alt={`Preview of ${lesson.frontmatter.title} lesson`}
										className='h-full w-full object-contain'
									/>
								</div>

								{/* CONTENT */}
								<div className='p-5'>
									<p className='text-xs font-medium tracking-wide text-(--color-section-label) uppercase'>
										Lesson {lesson.frontmatter.lessonNumber}
									</p>

									<h2 className='mt-1 text-base leading-tight font-medium text-(--color-foreground)'>
										{lesson.frontmatter.title}
									</h2>
								</div>
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

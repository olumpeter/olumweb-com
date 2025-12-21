import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

import type { Route } from './+types/$lessonSlug'
import type { LessonSlug } from '~/learn/build-for-the-web/lessonRegistry'

import { lessonImports } from '~/learn/build-for-the-web/lessonRegistry'

export async function loader({ params }: Route.LoaderArgs) {
	const slug = params.lessonSlug as LessonSlug

	const { getPublishedLessons, loadLessonMetadata } =
		await import('./lesson.server')

	const lessons = await getPublishedLessons()
	const index = lessons.findIndex(l => l.slug === slug)

	if (index === -1) {
		throw new Response('Lesson not found', { status: 404 })
	}

	const { lessonFrontmatter, lessonThumbnail } = await loadLessonMetadata(slug)

	return {
		slug,
		frontmatter: lessonFrontmatter,
		thumbnail: lessonThumbnail,
		prev: lessons[index - 1] ?? null,
		next: lessons[index + 1] ?? null,
	}
}

export default function LessonPage({ loaderData }: Route.ComponentProps) {
	const { slug, frontmatter, thumbnail, prev, next } = loaderData

	const [Component, setComponent] =
		useState<null | React.ComponentType<unknown>>(null)

	// Used to avoid restoring scroll more than once
	const hasRestoredScroll = useRef(false)

	// Load MDX module
	useEffect(() => {
		let cancelled = false

		async function load() {
			const mod = await lessonImports[slug]()
			if (!cancelled) {
				setComponent(() => mod.default)
			}
		}

		void load()

		return () => {
			cancelled = true
		}
	}, [slug])

	// ✅ Fix scroll restoration AFTER MDX mounts
	useEffect(() => {
		if (!Component) return
		if (hasRestoredScroll.current) return

		hasRestoredScroll.current = true

		requestAnimationFrame(() => {
			const key = window.history.state?.key
			if (!key) return

			const positions = JSON.parse(
				sessionStorage.getItem('react-router-scroll-positions') || '{}',
			)

			const y = positions[key]
			if (typeof y === 'number') {
				window.scrollTo(0, y)
			}
		})
	}, [Component])

	return (
		<main className='mx-auto max-w-3xl px-(--page-padding-inline) py-10 sm:py-16'>
			{!Component ? (
				<p className='py-20 text-center text-(--color-foreground-muted)'>
					Loading lesson…
				</p>
			) : (
				<>
					<h1 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
						{frontmatter.title}
					</h1>

					<p className='mt-2 mb-6 text-sm text-(--color-foreground-muted)'>
						Lesson {String(frontmatter.lessonNumber).padStart(3, '0')}
					</p>

					{thumbnail && (
						<img
							src={thumbnail}
							alt={frontmatter.title}
							className='mb-10 rounded-lg border border-(--color-outline)'
						/>
					)}

					<article className='prose max-w-none'>
						<Component />
					</article>

					{/* SOFT CTA */}
					<section
						aria-labelledby='lesson-cta'
						className='mt-16 rounded-lg border border-(--border-subtle) bg-(--surface-subtle) p-6 sm:p-7'
					>
						<h2
							id='lesson-cta'
							className='sr-only'
						>
							Learn live
						</h2>

						<p className='max-w-prose text-[0.95rem] leading-[1.6] text-(--color-text-soft)'>
							If this teaching style clicks for you, I also teach this live —
							slowly, intentionally, with real feedback.
						</p>

						<p className='mt-4 text-sm'>
							<a
								href='https://wa.me/254713729706'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center justify-center rounded-lg bg-(--surface-subtle) px-4 py-2 text-sm font-medium tracking-[0.01em] text-(--color-foreground) no-underline transition hover:bg-(--surface-subtle-hover) hover:shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none'
							>
								Message Peter on WhatsApp →
							</a>
						</p>
					</section>

					{/* PREV / NEXT */}
					{(prev || next) && (
						<nav className='mt-16 border-t pt-6'>
							<div className='flex justify-between gap-6'>
								{prev ? (
									<Link
										to={`/learn/build-for-the-web/${prev.slug}`}
										className='group max-w-[45%] no-underline'
									>
										<p className='text-xs tracking-wide text-(--color-text-soft) uppercase'>
											Previous lesson
										</p>
										<span className='block text-(--color-primary) group-hover:underline'>
											← {prev.title}
										</span>
									</Link>
								) : (
									<span />
								)}

								{next ? (
									<Link
										to={`/learn/build-for-the-web/${next.slug}`}
										className='group max-w-[45%] text-right no-underline'
									>
										<p className='text-xs tracking-wide text-(--color-text-soft) uppercase'>
											Next lesson
										</p>
										<span className='block text-(--color-primary) group-hover:underline'>
											{next.title} →
										</span>
									</Link>
								) : (
									<span />
								)}
							</div>
						</nav>
					)}
				</>
			)}
		</main>
	)
}

import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

import type { Route } from './+types/$lessonSlug'
import type { LessonSlug } from '~/utils/lessons'

import { lessonImports } from '~/utils/lessons'

export async function loader({ params }: Route.LoaderArgs) {
	const slug = params.lessonSlug as LessonSlug

	const { getPublishedLessons, loadLessonMetadata } = await import(
		'./lesson.server'
	)

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

	const [Component, setComponent] = useState<null | React.ComponentType>(null)

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

	const articleRef = useRef<HTMLElement | null>(null)

	return (
		<main
			className='mx-auto max-w-3xl px-(--page-padding-inline) py-10 sm:py-16'
		>
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

					<article
						ref={articleRef}
						className='prose prose-neutral max-w-none'
					>
						<Component />
					</article>

					{(prev || next) && (
						<nav className='mt-14 flex justify-between border-t pt-6'>
							{prev ? (
								<Link
									to={`/learn/build-for-the-web/${prev.slug}`}
									className='text-(--color-primary)'
								>
									← {prev.title}
								</Link>
							) : (
								<span />
							)}

							{next ? (
								<Link
									to={`/learn/build-for-the-web/${next.slug}`}
									className='text-(--color-primary)'
								>
									{next.title} →
								</Link>
							) : (
								<span />
							)}
						</nav>
					)}
				</>
			)}
		</main>
	)
}

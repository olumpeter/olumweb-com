import type { LessonSlug, LessonFrontmatter } from '~/utils/lessons'

import { lessonRegistry, lessonThumbnails } from '~/utils/lessons'

export type LessonSummary = {
	slug: LessonSlug
	title: string
	lessonNumber: number
	thumbnail: string
}

/**
 * Published lessons list
 * (static for now — correct for this stage)
 */
export async function getPublishedLessons(): Promise<LessonSummary[]> {
	return Object.keys(lessonRegistry)
		.map((slug, index) => ({
			slug: slug as LessonSlug,
			title: 'Hello World App',
			lessonNumber: index + 1,
			thumbnail: lessonThumbnails[slug as LessonSlug],
		}))
		.sort((a, b) => a.lessonNumber - b.lessonNumber)
}

/**
 * Server-safe lesson metadata
 */
export async function loadLessonMetadata(lessonSlug: LessonSlug): Promise<{
	lessonFrontmatter: LessonFrontmatter
	lessonThumbnail: string
}> {
	const entry = lessonRegistry[lessonSlug]

	if (!entry) {
		throw new Response('Lesson not found', { status: 404 })
	}

	return {
		lessonFrontmatter: {
			title: 'Hello World App',
			lessonNumber: 1,
			published: true,
		},
		lessonThumbnail: entry.thumbnail,
	}
}

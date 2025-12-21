import type {
	LessonSlug,
	LessonFrontmatter,
} from '~/learn/build-for-the-web/lessonRegistry'

import {
	lessonRegistry,
	lessonThumbnails,
} from '~/learn/build-for-the-web/lessonRegistry'

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
		.map(slug => {
			const lesson = lessonRegistry[slug as LessonSlug]

			return {
				slug: slug as LessonSlug,
				title: lesson.frontmatter.title,
				lessonNumber: lesson.frontmatter.lessonNumber,
				thumbnail: lessonThumbnails[slug as LessonSlug],
			}
		})
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
		lessonFrontmatter: entry.frontmatter,
		lessonThumbnail: entry.thumbnail,
	}
}

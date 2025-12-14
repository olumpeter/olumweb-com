import { z } from 'zod'

import type { ComponentType } from 'react'

import helloWorldThumbnail from '~/learn/build-for-the-web/images/hello-world-app-final-result.jpg?url'

/**
 * Client-side lesson registry
 * Each lesson maps to:
 * - a dynamic MDX import
 * - a static thumbnail
 */
export const lessonRegistry = {
	'hello-world-app': {
		import: () => import('~/learn/build-for-the-web/hello-world-app.mdx'),
		thumbnail: helloWorldThumbnail,
	},
} as const

export type LessonSlug = keyof typeof lessonRegistry

export type LessonModule = {
	default: ComponentType<unknown>
	frontmatter?: unknown
}

/**
 * Client-only MDX imports
 */
export const lessonImports = Object.entries(lessonRegistry).reduce(
	(modules, [slug, config]) => {
		modules[slug as LessonSlug] = config.import
		return modules
	},
	{} as Record<LessonSlug, () => Promise<LessonModule>>,
)

/**
 * Shared thumbnails (safe for server + client)
 */
export const lessonThumbnails = Object.entries(lessonRegistry).reduce(
	(thumbs, [slug, config]) => {
		thumbs[slug as LessonSlug] = config.thumbnail
		return thumbs
	},
	{} as Record<LessonSlug, string>,
)

/**
 * Frontmatter schema
 */
export const LessonFrontmatterSchema = z.object({
	title: z.string(),
	lessonNumber: z.number(),
	published: z.boolean(),
})

export type LessonFrontmatter = z.infer<typeof LessonFrontmatterSchema>

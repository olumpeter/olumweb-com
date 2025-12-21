import { z } from 'zod'

import type { ComponentType } from 'react'

import helloWorldAppThumbnail from '~/learn/build-for-the-web/images/001-hello-world-app/hello-world-app-final-result.jpg?url'
import profileCardAppThubnail from '~/learn/build-for-the-web/images/002-profile-card-app/profile-app-card-final-result.jpg?url'

/**
 * Client-side lesson registry
 * Each lesson maps to:
 * - a dynamic MDX import
 * - a static thumbnail
 * - explicit frontmatter metadata
 */
export const lessonRegistry = {
	'hello-world-app': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/001-hello-world-app.mdx'),
		thumbnail: helloWorldAppThumbnail,
		frontmatter: {
			title: 'Hello World App',
			lessonNumber: 1,
			published: true,
		},
	},
	'profile-card-app': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/002-profile-card-app.mdx'),
		thumbnail: profileCardAppThubnail,
		frontmatter: {
			title: 'Profile Card App',
			lessonNumber: 2,
			published: true,
		},
	},
} as const

export type LessonSlug = keyof typeof lessonRegistry

/**
 * Shape of an imported MDX lesson module
 */
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
 * (used by server + client)
 */
export const LessonFrontmatterSchema = z.object({
	title: z.string(),
	lessonNumber: z.number(),
	published: z.boolean(),
})

export type LessonFrontmatter = z.infer<typeof LessonFrontmatterSchema>

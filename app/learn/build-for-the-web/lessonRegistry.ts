import { z } from 'zod'

import type { ComponentType } from 'react'

import helloWorldAppThumbnail from '~/learn/build-for-the-web/images/001-hello-world-app/thumbnail/hello-world-app-thumbnail.png?url'
import profileCardAppThubnail from '~/learn/build-for-the-web/images/002-profile-card-app/thumbnail/profile-card-app-thumbnail.png?url'
import addingBehaviorToAstaticProfileCardAppThumbnail from '~/learn/build-for-the-web/images/003-adding-behavior-to-a-static-profile-card-app/thumbnail/adding-behavior-to-a-static-profile-card-app.png?url'
import addingASecondBehaviorToTheProfileCardAppThumbnail from '~/learn/build-for-the-web/images/004-adding-a-second-behavior-to-the-profile-card-app/thumbnail/adding-a-second-behavior-to-the-profile-card-app.png?url'
import controllingUserInputInTheProfileCardAppThumbnail from '~/learn/build-for-the-web/images/005-controlling-user-input-in-the-profile-card-app/thumbnail/controlling-user-input-in-the-profile-card-app.png?url'

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
	'adding-behavior-to-a-static-profile-card-app': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/003-adding-behavior-to-a-static-profile-card-app.mdx'),
		thumbnail: addingBehaviorToAstaticProfileCardAppThumbnail,
		frontmatter: {
			title: 'Adding Behavior to a Static Profile Card App',
			lessonNumber: 3,
			published: true,
		},
	},
	'adding-a-second-behavior-to-the-profile-card-app': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/004-adding-a-second-behavior-to-the-profile-card-app.mdx'),
		thumbnail: addingASecondBehaviorToTheProfileCardAppThumbnail,
		frontmatter: {
			title: 'Adding a Second Behavior to the Profile Card App',
			lessonNumber: 4,
			published: true,
		},
	},
	'controlling-user-input-in-the-profile-card-app': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/005-controlling-user-input-in-the-profile-card-app.mdx'),
		thumbnail: controllingUserInputInTheProfileCardAppThumbnail,
		frontmatter: {
			title: 'Controlling User Input in the Profile Card App',
			lessonNumber: 5,
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

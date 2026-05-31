import { z } from 'zod'

import type { ComponentType } from 'react'

import helloWorldAppThumbnail from '~/learn/build-for-the-web/images/001-hello-world-app/thumbnail/hello-world-app-thumbnail.png?url'
import profileCardAppThubnail from '~/learn/build-for-the-web/images/002-profile-card-app/thumbnail/profile-card-app-thumbnail.png?url'
import addingBehaviorToAstaticProfileCardAppThumbnail from '~/learn/build-for-the-web/images/003-adding-behavior-to-a-static-profile-card-app/thumbnail/adding-behavior-to-a-static-profile-card-app.png?url'
import addingASecondBehaviorToTheProfileCardAppThumbnail from '~/learn/build-for-the-web/images/004-adding-a-second-behavior-to-the-profile-card-app/thumbnail/adding-a-second-behavior-to-the-profile-card-app.png?url'
import controllingUserInputInTheProfileCardAppThumbnail from '~/learn/build-for-the-web/images/005-controlling-user-input-in-the-profile-card-app/thumbnail/controlling-user-input-in-the-profile-card-app.png?url'
import validatingUserInputInTheProfileCardAppThumbnail from '~/learn/build-for-the-web/images/006-validating-user-input-in-the-profile-card-app/thumbnail/validating-user-input-in-the-profile-card-app.png?url'
import submittingTheMessageWithFormAndNavigationThumbnail from '~/learn/build-for-the-web/images/007-submitting-the-message-with-form-and-navigation/thumbnail/submitting-the-message-with-form-and-navigation.png?url'
import movingValidationToTheServerAndHandlingRejections from '~/learn/build-for-the-web/images/008-moving-validation-to-the-server-and-handling-rejections/thumbnail/moving-validation-to-the-server-and-handling-rejections.png?url'
import handlingErrorsGracefully from '~/learn/build-for-the-web/images/009-handling-errors-gracefully/thumbnail/009-handling-errors-gracefully.png?url'
import persistingDataAndBuildingCrud from '~/learn/build-for-the-web/images/010-persisting-data-and-building-crud/thumbnail/010-persisting-data-and-building-crud.png?url'
import persistingDataWithPrismaAndSqlite from '~/learn/build-for-the-web/images/011-persisting-data-with-prisma-and-sqlite/thumbnail/011-persisting-data-with-prisma-and-sqlite.png?url'
import introducingUsersAndOwnership from '~/learn/build-for-the-web/images/012-introducing-users-and-ownership/thumbnail/012-introducing-users-and-ownership.png?url'
import introducingAuthenticationAndSessions from '~/learn/build-for-the-web/images/013-introducing-authentication-and-sessions/thumbnail/introducing-authentication-and-sessions.png?url'
import redirectsLogoutAndProtectingRoutes from '~/learn/build-for-the-web/images/014-redirects-logout-and-protecting-routes/thumbnail/014-redirects-logout-and-protecting-routes.png?url'
import verificationAndTrustedIdentity from '~/learn/build-for-the-web/images/015-real-authentication-with-credentials/thumbnail/015-verification-and-trusted-dentity.png?url'
import creatingIdentitySignup from '~/learn/build-for-the-web/images/016-creating-identity-signup/thumbnail/016-creating-identity-signup.png?url'
import passwordHashingSecureCredentials from '~/learn/build-for-the-web/images/017-password-hashing-secure-credentials/thumbnail/017-password-hashing-secure-credentials.png?url'
import redirectingAuthenticatedUsers from '~/learn/build-for-the-web/images/018-redirecting-authenticated-users/thumbnail/018-redirecting-authenticated-users.png?url'
import centralizingRouteProtection from '~/learn/build-for-the-web/images/019-centralizing-route-protection/thumbnail/019-centralizing-route-protection.png?url'
import loadingTheAuthenticatedUser from '~/learn/build-for-the-web/images/020-loading-the-authenticated-user/thumbnail/020-loading-the-authenticated-user.png?url'
import centralizingAuthenticatedUserLoading from '~/learn/build-for-the-web/images/021-centralizing-authenticated-user-loading/thumbnail/021-centralizing-authenticated-user-loading.png?url'
import sharingAuthenticatedUserDataAcrossTheApplication from '~/learn/build-for-the-web/images/022-sharing-authenticated-user-data-across-the-application/thumbnail/022-sharing-authenticated-user-data-across-the-application.png?url'

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
	'validating-user-input-in-the-profile-card-app': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/006-validating-user-input-in-the-profile-card-app.mdx'),
		thumbnail: validatingUserInputInTheProfileCardAppThumbnail,
		frontmatter: {
			title: 'Validating User Input in the Profile Card App',
			lessonNumber: 6,
			published: true,
		},
	},
	'submitting-the-message-with-form-and-navigation': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/007-submitting-the-message-with-form-and-navigation.mdx'),
		thumbnail: submittingTheMessageWithFormAndNavigationThumbnail,
		frontmatter: {
			title: 'Submitting the Message with <Form> and Navigation',
			lessonNumber: 7,
			published: true,
		},
	},
	'moving-validation-to-the-server-and-handling-rejections': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/008-moving-validation-to-the-server-and-handling-rejections.mdx'),
		thumbnail: movingValidationToTheServerAndHandlingRejections,
		frontmatter: {
			title: 'Moving Validation to the Server and Handling Rejections',
			lessonNumber: 8,
			published: true,
		},
	},
	'handling-errors-gracefully': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/009-handling-errors-gracefully.mdx'),
		thumbnail: handlingErrorsGracefully,
		frontmatter: {
			title: 'Handling Errors Gracefully',
			lessonNumber: 9,
			published: true,
		},
	},
	'persisting-data-and-building-crud': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/010-persisting-data-and-building-crud.mdx'),
		thumbnail: persistingDataAndBuildingCrud,
		frontmatter: {
			title: 'Persisting Data and Building CRUD',
			lessonNumber: 10,
			published: true,
		},
	},
	'persisting-data-with-prisma-and-sqlite': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/011-persisting-data-with-prisma-and-sqlite.mdx'),
		thumbnail: persistingDataWithPrismaAndSqlite,
		frontmatter: {
			title: 'Persisting Data with Prisma and SQLite',
			lessonNumber: 11,
			published: true,
		},
	},
	'introducing-users-and-ownership': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/012-introducing-users-and-ownership.mdx'),
		thumbnail: introducingUsersAndOwnership,
		frontmatter: {
			title: 'Introducing Users and Ownership',
			lessonNumber: 12,
			published: true,
		},
	},
	'introducing-authentication-and-sessions': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/013-introducing-authentication-and-sessions.mdx'),
		thumbnail: introducingAuthenticationAndSessions,
		frontmatter: {
			title: 'Introducing Authentication and Sessions',
			lessonNumber: 13,
			published: true,
		},
	},
	'redirects-logout-and-protecting-routes': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/014-redirects-logout-and-protecting-routes.mdx'),
		thumbnail: redirectsLogoutAndProtectingRoutes,
		frontmatter: {
			title: 'Redirects, Logout, and Protecting Routes',
			lessonNumber: 14,
			published: true,
		},
	},
	'verification-and-trusted-identity': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/015-verification-and-trusted-identity.mdx'),
		thumbnail: verificationAndTrustedIdentity,
		frontmatter: {
			title: 'Verification and Trusted Identity',
			lessonNumber: 15,
			published: true,
		},
	},
	'creating-identity-signup': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/016-creating-identity-signup.mdx'),
		thumbnail: creatingIdentitySignup,
		frontmatter: {
			title: 'Creating Identity (Signup)',
			lessonNumber: 16,
			published: true,
		},
	},
	'password-hashing-secure-credentials': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/017-password-hashing-secure-credentials.mdx'),
		thumbnail: passwordHashingSecureCredentials,
		frontmatter: {
			title: 'Password Hashing and Secure Credentials',
			lessonNumber: 17,
			published: true,
		},
	},
	'redirecting-authenticated-users': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/018-redirecting-authenticated-users.mdx'),
		thumbnail: redirectingAuthenticatedUsers,
		frontmatter: {
			title: 'Redirecting Authenticated Users',
			lessonNumber: 18,
			published: true,
		},
	},
	'centralizing-route-protection': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/019-centralizing-route-protection.mdx'),
		thumbnail: centralizingRouteProtection,
		frontmatter: {
			title: 'Centralizing Route Protection',
			lessonNumber: 19,
			published: true,
		},
	},
	'loading-the-authenticated-user': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/020-loading-the-authenticated-user.mdx'),
		thumbnail: loadingTheAuthenticatedUser,
		frontmatter: {
			title: 'Loading the Authenticated User',
			lessonNumber: 20,
			published: true,
		},
	},
	'centralizing-authenticated-user-loading': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/021-centralizing-authenticated-user-loading.mdx'),
		thumbnail: centralizingAuthenticatedUserLoading,
		frontmatter: {
			title: 'Centralizing Authenticated User Loading',
			lessonNumber: 21,
			published: true,
		},
	},
	'sharing-authenticated-user-data-across-the-application': {
		import: () =>
			import('~/learn/build-for-the-web/lessons/022-sharing-authenticated-user-data-across-the-application.mdx'),
		thumbnail: sharingAuthenticatedUserDataAcrossTheApplication,
		frontmatter: {
			title: 'Sharing Authenticated User Data Across the Application',
			lessonNumber: 21,
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

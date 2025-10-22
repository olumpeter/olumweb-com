export const tutorials = {
	'001/hello-world-app': () =>
		import('~/tutorials/build-for-the-web/001/hello-world-app.mdx'),
	// future tutorials go here:
	// "002/some-other-tutorial": () => import("~/tutorials/build-for-the-web/002/some-other-tutorial.mdx"),
} as const

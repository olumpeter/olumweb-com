import { index, route, type RouteConfig } from '@react-router/dev/routes'

export default [
	index('routes/home.tsx'),
	route('learn', 'learn/index.tsx'),
	route('learn/build-for-the-web', 'learn/build-for-the-web/index.tsx'),
	route(
		'learn/build-for-the-web/:lessonSlug',
		'learn/build-for-the-web/$lessonSlug.tsx',
	),
	route('about', 'routes/about.tsx'),
] satisfies RouteConfig

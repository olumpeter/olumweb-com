import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
	index('routes/home.tsx'),

	route('tutorials', 'routes/tutorials.tsx', [
		index('routes/tutorials/index.tsx'),
		route('build-for-the-web', 'routes/tutorials/build-for-the-web.tsx', [
			index('routes/tutorials/build-for-the-web/index.tsx'),
			route(
				':tutorialNumber/:tutorialName',
				'routes/tutorials/build-for-the-web/$tutorialNumber/$tutorialName.tsx',
			),
		]),
	]),

	route('series', 'routes/series.tsx', [
		index('routes/series/index.tsx'),
		route(':seriesSlug', 'routes/series/$seriesSlug.tsx'),
	]),

	route('about', 'routes/about.tsx'),
] satisfies RouteConfig

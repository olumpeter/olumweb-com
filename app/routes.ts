import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
	index('routes/home.tsx'),
	route(
		'tutorials/build-for-the-web/:tutorialNumber/:tutorialName',
		'routes/tutorials/build-for-the-web/$tutorialNumber/$tutorialName.tsx',
	),
] satisfies RouteConfig

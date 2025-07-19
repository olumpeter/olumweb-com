import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
	index('routes/home.tsx'),
	route('/exercises', 'routes/exercises.tsx', [
		index('routes/exercises/home.tsx'),
		route('what-is-javascript', 'routes/exercises/what-is-javascript.tsx'),
	]),
] satisfies RouteConfig

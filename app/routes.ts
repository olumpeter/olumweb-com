import {
  type RouteConfig,
  index,
  route,
} from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('/what-is-javascript', 'routes/what-is-javascript.tsx'),
] satisfies RouteConfig

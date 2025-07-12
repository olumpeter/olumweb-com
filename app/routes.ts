import {
  type RouteConfig,
  index,
  route,
} from '@react-router/dev/routes'

export default [
  index('routes/home.jsx'),
  route('/what-is-javascript', 'routes/what-is-javascript.jsx'),
] satisfies RouteConfig

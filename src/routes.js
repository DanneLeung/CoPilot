import NotFoundView from './components/404.vue'

import dashRoutes from './routes/dash'
import indexRoutes from './routes/index'

// Routes
const routes = [indexRoutes, dashRoutes, {
  // not found handler
  path: '*',
  component: NotFoundView
}]

export default routes

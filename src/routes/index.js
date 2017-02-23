import NotFoundView from './404.vue'
import HomeView from './home'
import DashView from './dash'
// Routes
export default [
  HomeView,
  DashView,
  {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

import NotFoundView from './404.vue'
import HomeView from './home'
import DashView from './dash'
import UserView from './user'
// Routes
export default [
  HomeView,
  DashView,
  UserView,
  {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

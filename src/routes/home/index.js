// Routes
export default {
  path: '/login',
  component: resolve => require(['./components/Login'], resolve),
  meta: {
    title: '首页',
    icon: 'home'
  }
}

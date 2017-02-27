// Sync route definition
export default {
  path: 'list',
  component: resolve => require(['./components/UserList'], resolve),
  meta: {
    title: '用户列表',
    icon: 'list'
  }
}

// Sync route definition
// import UserList from '../components/UserList'
export default {
  path: 'list',
  // component: UserList,
  component: resolve => require(['../components/UserList'], resolve),
  meta: {
    title: '用户列表',
    description: '用户列表'
  }
}

// Sync route definition
export default {
  path: '/user',
  component: resolve => require(['./components/UserView'], resolve),
  children: [{
    name: 'Userlist',
    path: '/',
    component: resolve => require(['./components/UserList'], resolve),
    meta: {
      title: '用户列表',
      description: '用户列表'
    }
  },
  {
    name: 'AddUser',
    path: 'add',
    component: resolve => require(['./components/UserForm'], resolve),
    meta: {
      title: '编辑用户',
      description: '输入用户数据'
    }
  }
  ],
  meta: {
    title: '用户',
    icon: 'user'
  }
}

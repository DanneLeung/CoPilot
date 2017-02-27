import DashView from './components/Dash.vue'
import DashboardView from './components/Dashboard.vue'
import ReposView from './components/Repos.vue'
export default {
  path: '/',
  // component: resolve => require(['./components/Dash'], resolve),
  component: DashView,
  auth: true,
  children: [{
    path: '',
    // component: resolve => require(['./components/Dashboard'], resolve),
    component: DashboardView,
    name: 'Dashboard',
    meta: {
      description: 'Overview of environment'
    }
  }, {
    path: '/tables',
    name: 'Tables',
    component: resolve => require(['./components/Tables'], resolve),
    meta: {
      description: 'Simple and advance table in CoPilot'
    }
  }, {
    path: '/tasks',
    component: resolve => require(['./components/Tasks'], resolve),
    name: 'Tasks',
    meta: {
      description: 'Tasks page in the form of a timeline'
    }
  }, {
    path: '/setting',
    component: resolve => require(['./components/Setting'], resolve),
    name: 'Settings',
    meta: {
      description: 'User settings page'
    }
  }, {
    path: '/access',
    component: resolve => require(['./components/Access'], resolve),
    name: 'Access',
    meta: {
      description: 'Example of using maps'
    }
  }, {
    path: '/server',
    component: resolve => require(['./components/Server'], resolve),
    name: 'Servers',
    meta: {
      description: 'List of our servers'
    }
  }, {
    path: '/repos',
    // component: resolve => require(['./components/Repos'], resolve),
    component: ReposView,
    name: 'Repository',
    meta: {
      description: 'List of popular javascript repos'
    }
  }]
}

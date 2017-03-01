<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel" v-if="state.user">
        <div class="pull-left image">
          <img src="/static/img/user.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <div>
            <p class="white">{{ state.user ? state.user.username : 'not logged in' }}</p>
          </div>
          <a href="javascript:;" v-on:click='logout'><i class="fa fa-circle text-success"></i> Logout</a>
        </div>
      </div>

      <!-- search form (Optional) -->
      <form v-on:submit.prevent class="sidebar-form">
        <div class="input-group">
          <input type="text" name="search" id="search" class="search form-control" data-toggle="hideseek" placeholder="Search Menus" data-list=".sidebar-menu">
          <span class="input-group-btn">
                  <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                  </button>
                </span>
        </div>
      </form>
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu">
        <li class="header">TOOLS</li>
        <li class="active pageLink" v-on:click="toggleMenu">
          <router-link to="/"><i class="fa fa-desktop"></i><span class="page">Dashboard</span></router-link>
        </li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/tables"><i class="fa fa-table"></i><span class="page">Tables</span></router-link>
        </li>

        <li class="header">ME</li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/tasks"><i class="fa fa-tasks"></i><span class="page">Tasks</span></router-link>
        </li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/setting"><i class="fa fa-cog"></i><span class="page">Settings</span></router-link>
        </li>

        <li class="header">LOGS</li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/access"><i class="fa fa-book"></i><span class="page">Access</span></router-link>
        </li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/server"><i class="fa fa-hdd-o"></i><span class="page">Server</span></router-link>
        </li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/repos"><i class="fa fa-heart"></i><span class="page">Repos</span><small class="label pull-right bg-green">AJAX</small></router-link>
        </li>

        <li class="header">PAGES</li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/login"><i class="fa fa-circle-o text-yellow"></i> <span class="page">Login</span></router-link>
        </li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/404"><i class="fa fa-circle-o text-red"></i> <span class="page">404</span></router-link>
        </li>
        <li class="header">System</li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/user"><i class="fa fa-user text-yellow"></i> <span class="page">Users</span></router-link>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>


  <!--<ul>
    <li v-for="route in _routes">
      <router-link :to="father + route.path">{{ route.title }}</router-link>
      <template v-if="route.children">
        <v-navbar :father="route.path ? route.path + '/' : ''" :routes="route.children"></v-navbar>
      </template>
    </li>
  </ul>-->
</template>

<script>
  export default {
    name: 'v-navbar',
    props: {},
    computed: {
      store: function() {
        return this.$parent.$store
      },
      state: function() {
        return this.store.state
      }
      // _routes() {
      //   return walkRoutes(this.routes)
      // }
    },
    methods: {
      changeloading: function() {
        this.store.commit('TOGGLE_SEARCHING')
      },
      toggleMenu: function(event) {
        // remove active from li
        window.$('li.pageLink').removeClass('active')

        // Add it to the item that was clicked
        var el = event.toElement.parentElement
        if (el.tagName === 'li') el = el.parentElement
        el.className = 'pageLink active'
      },
      logout: function() {
        this.$store.commit('SET_USER', null)
        this.$store.commit('SET_TOKEN', null)

        if (window.localStorage) {
          window.localStorage.setItem('user', null)
          window.localStorage.setItem('token', null)
        }

        this.$router.push('/login')
      }
    }
  }

  // function walkRoutes(routes) {
  //   return routes.map(({
  //     path,
  //     children,
  //     meta
  //   }) => {
  //     const {
  //       title,
  //       name
  //     } = meta || {}
  //     return {
  //       path,
  //       name: name || '',
  //       title: title || '',
  //       children
  //     }
  //   })
  // }

</script>

<style>
  ul {
    padding-left: 20px
  }

</style>

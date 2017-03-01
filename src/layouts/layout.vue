<template>
  <div class="wrapper">
    <v-header :app-name='app.name'></v-header>
    <v-navbar></v-navbar>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          <!--{{$route.name.toUpperCase() }}-->
          {{$route.name }}
          <small>{{ $route.meta.description }}</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="javascript:;"><i class="fa fa-home"></i>Home</a></li>
          <!--<li class="active">{{$route.name.toUpperCase() }}</li>-->
          <li class="active">{{$route.name }}</li>
        </ol>
      </section>
      <transition name="fade" mode="out-in" appear>
        <keep-alive>
          <router-view class="router-view"></router-view>
        </keep-alive>
      </transition>
      <slot></slot>
    </div>
    <!-- /.content-wrapper -->
    <!-- Main Footer -->
    <footer class="main-footer">
      <strong>Copyright &copy; {{year}} <a href="javascript:;">{{ app.copyright }}</a>.</strong> All rights reserved.
    </footer>
  </div>

</template>
<script>
  import VHeader from '../components/Header'
  import VNavbar from '../components/Navbar'
  export default {
    name: 'Layout',
    components: {
      VHeader: VHeader,
      VNavbar: VNavbar
    },
    computed: {
      store: function () {
        return this.$store
      },
      state: function () {
        return this.store.state
      },
      callAPI: function () {
        return this.$parent.callAPI
      },
      logout: function () {
        return this.$parent.logout
      },
      app: function () {
        return {
          name: 'MMC',
          copyright: 'xcesys.com'
        }
      },
      year: function () {
        var y = new Date()
        return y.getFullYear()
      }
    },
    methods: {
      changeloading: function () {
        this.store.commit('TOGGLE_SEARCHING')
      }
    },
    mounted: function () {
      // Page is ready. Let's load our functions!
    }
  }

</script>

<style>
  .user-panel {
    height: 4em;
  }

</style>

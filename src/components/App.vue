<template>
  <div>
    <router-view></router-view>
    <div id="app"></div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        section: 'Head',
        version: '0.10.0',
        callingAPI: false,
        serverURI: 'http://localhost:4040/api'
        // caller: this.$http
      }
    },
    methods: {
      callAPI: function (method, url, data) {
        this.callingAPI = true
        window.console.log('data: ', data)
        url = url || this.serverURI// if no url is passed then inheret local server URI
        return this.$http({url: url, method: method, body: data})
      },
      logout: function () {
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
</script>

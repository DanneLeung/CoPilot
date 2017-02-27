<template>
  <div>
    <router-view></router-view>
    <div id="app"></div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data: function () {
      return {
        section: 'Head',
        version: '0.10.0',
        callingAPI: false,
        serverURI: 'http://localhost:4040/api',
        caller: this.$http
      }
    },
    methods: {
      callAPI: function (method, url, data) {
        this.callingAPI = true
        url = url || this.serverURI // if no url is passed then inheret local server URI
        return this.caller({
          url: url,
          method: method,
          body: data
        })
      }
    }
  }

</script>

<template>
  <vuetable ref="vuetable" api-url="http://vuetable.ratiw.net/api/users" :fields="fields" :css="css"></vuetable>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import { mapGetters } from 'vuex'

  module.exports = {
    name: 'UserList',
    components: {
      Vuetable
    },
    computed: {
      ...mapGetters(['css', 'fields'])
    }
    // methods: mapActions({ list: 'list' })
  }

</script>

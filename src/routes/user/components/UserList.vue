<template>
  <div>
    <ul>
      <li v-for='li in userList'>{{li._id}} - {{li.username}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  module.exports = {
    name: 'UserList',
    computed: {
      ...mapGetters({ userList: 'userList' })
    },
    methods: mapActions({ list: 'list' }),
    mounted() {
      this.list()
    }
  }

</script>

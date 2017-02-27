<template>
  <div>
    <layout></layout>
  </div>
  <!-- ./wrapper -->
</template>

<script>
  import Layout from '../../../layouts'
  module.exports = {
    name: 'Dash',
    components: {
      Layout
    },
    data: function () {
      return {
        section: 'Dash',
        me: '',
        error: '',
        api: {
          servers: {
            url: '', // Back end server
            result: []
          }
        }
      }
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
      }
    }
  }

</script>
<style>
  hr.visible-xs-block {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.17);
    height: 1px;
    border-color: transparent;
  }

</style>

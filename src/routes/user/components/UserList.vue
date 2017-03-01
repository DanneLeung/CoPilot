<template>
  <div class="box">
    <div class="box-header">
      <div class="box-title">用户列表</div>
      <div class="box-tools">
        <router-link to="/user/add" class="btn btn-default btn-box-tool" title="添加新用户">
          <i class="fa fa-fw fa-plus"></i> Add new user
        </router-link>
        <!--<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i> </button>-->
        <!--<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>-->
      </div>
    </div>
    <div class="box-body table-responsive">
      <vuetable ref="vuetable" api-url="http://localhost:4040/api/users" :fields="fields" :css="css" pagination-path="" :per-page="20" :multi-sort="true" multi-sort-key="ctrl" detail-row-id="_id" @vuetable:pagination-data="onPaginationData"></vuetable>
      <div>
        <vuetable-pagination-info ref="paginationInfo" info-class="pull-left"></vuetable-pagination-info>
        <vuetable-pagination ref="pagination" :css="cssPagination" :icons="icons" @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
  import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
  import Vue from 'vue'
  import CustomActions from './CustomActions'
  Vue.component('custom-actions', CustomActions)

  // import { mapGetters } from 'vuex'

  module.exports = {
    name: 'UserList',
    components: {
      Vuetable,
      VuetablePagination,
      VuetablePaginationInfo
    },
    data() {
      return {
        css: {
          tableClass: 'table table-striped table-bordered',
          loadingClass: 'loading',
          ascendingIcon: 'glyphicon glyphicon-chevron-up',
          descendingIcon: 'glyphicon glyphicon-chevron-down',
          sortHandleIcon: 'glyphicon glyphicon-menu-hamburger'
        },
        cssPagination: {
          wrapperClass: 'pagination pull-right',
          activeClass: 'btn-primary',
          disabledClass: 'disabled',
          pageClass: 'btn btn-sm btn-border',
          linkClass: 'btn btn-sm btn-border'
        },
        icons: {
          first: '',
          prev: '',
          next: '',
          last: ''
        },
        fields: [
          { name: 'username', sortField: 'username', title: 'Username' },
          { name: 'email', sortField: 'email', title: 'Email' },
          { name: 'address.line1', title: 'Address 1' },
          { name: 'address.line2', title: 'Address 2' },
          { name: 'address.zipcode', title: 'Zipcode' },
          { name: '__component:custom-actions', title: 'Actions', titleClass: 'text-center', dataClass: 'text-center' }
        ],
        sortOrder: [{
          field: 'email',
          sortField: 'email',
          direction: 'asc'
        }],
        moreParams: {}
      }
    },
    methods: {
      onPaginationData(paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
        this.$refs.paginationInfo.setPaginationData(paginationData)
      },
      onChangePage(page) {
        this.$refs.vuetable.changePage(page)
      }
    }
    // methods: mapActions({ list: 'list' })
  }

</script>
<style>
  .pagination {
    margin-top: 8px !important;
    margin-bottom: 0;
  }
  
  .vuetable-pagination-info {
    margin-top: 8px !important;
  }

</style>

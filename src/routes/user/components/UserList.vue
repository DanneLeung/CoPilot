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
      <vuetable ref="vuetable" api-url="http://localhost:4040/api/users" :fields="fields" :css="css" pagination-path="" :per-page="20" :multi-sort="true" multi-sort-key="ctrl" detail-row-id="_id" @vuetable:pagination-data="onPaginationData">
        <template slot="actions" scope="props">
          <div class="custom-actions">
            <!--<button class="btn btn-sm btn-default" @click="itemAction('view-item', rowData, rowIndex)"><i class="glyphicon glyphicon-zoom-in"></i></button>-->
            <button class="btn btn-sm btn-default" @click="itemAction('edit-item', props.rowData, props.rowIndex)"><i class="glyphicon glyphicon-pencil"></i></button>
            <button class="btn btn-sm btn-default" @click="itemAction('remove-item', props.rowData, props.rowIndex)"><i class="glyphicon glyphicon-remove"></i></button>
          </div>
        </template>
      </vuetable>
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
  import { mapGetters, mapActions } from 'vuex'

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
          { name: 'username', sortField: 'username', title: '用户名' },
          { name: 'mobile', sortField: 'mobile', title: '手机' },
          { name: 'email', title: 'Email' },
          { name: 'enabled', title: '激活' },
          { name: '__slot:actions', title: '操作', titleClass: 'text-center', dataClass: 'text-center' }
        ],
        sortOrder: [{
          field: 'mobile',
          sortField: 'mobile',
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
      },
      itemAction(action, data, index) {
        if (action === 'edit-item') {
          this.$router.replace('/user/' + data._id)
        } else if (action === 'remove-item') {
          this.remove(data._id)
        }
      },
      loadUser() {
        if (this.$route.params.id) this.load(this.$route.params.id)
        else this.create()
      },
      ...mapActions(['load', 'create', 'remove'])
    },
    computed: {
      ...mapGetters(['deleted', 'edited'])
    },
    watch: {
      'deleted': function() {
        if (this.$refs && this.$refs.vuetable) {
          this.$refs.vuetable.refresh()
        }
      },
      'edited': function() {
        this.$router.replace('/user')
        if (this.$refs && this.$refs.vuetable) {
          this.$refs.vuetable.refresh()
        }
      },
      '$route.params.id': 'loadUser'
      // 如果路由有变化，会再次执行该方法
      // '$route': function() {
        // 不可以使用箭头函数，否则this指针不是vue实例
        // if (this.$refs && this.$refs.vuetable) {
        //   this.$refs.vuetable.refresh()
        // }
      // }
    }
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

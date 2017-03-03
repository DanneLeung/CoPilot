<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <!-- Input Addons -->
          <div class="box-header with-border">
            <h3 class="box-title">用户信息</h3>
          </div>
          <form class="form-horizontal">
            <div class="box-body">
              <input type="hidden" name="_id" v-model="muser._id">
              <div class="form-group">
                <label for="username" class="col-sm-2 control-label">用户名</label>
                <div class="col-sm-10">
                  <input type="text" v-model="muser.username" class="form-control" id="username" placeholder="Username">
                </div>
              </div>
              <div class="form-group">
                <label for="mobile" class="col-sm-2 control-label">手机</label>
                <div class="col-sm-10">
                  <input type="mobile" v-model="muser.mobile" class="form-control" id="mobile" placeholder="mobile">
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" v-model="muser.email" class="form-control" id="email" placeholder="Email">
                </div>
              </div>
              <div class="form-group">
                <label for="password" class="col-sm-2 control-label">密码</label>
                <div class="col-sm-10">
                  <input type="password" v-model="muser.password" class="form-control" id="password" placeholder="Password">
                </div>
              </div>
              <div class="form-group">
                <label for="confirmPassword" class="col-sm-2 control-label">确认密码</label>
                <div class="col-sm-10">
                  <input type="password" v-model="muser.confirmPassword" class="form-control" id="confirmPassword" placeholder="Password">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="muser.enabled"> 激活
                      </label>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
            <div class="box-footer">
              <router-link to="/user" replace type="button" class="btn btn-default"><i class="fa fa-reply fa-back"></i> 取消</router-link>
              <button type="button" class="btn btn-info" @click="save(muser)"><i class="fa fa-fw fa-save"></i> 保存</button>
            </div>
            <!-- /.box-footer -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  require('moment')
  import datepicker from 'vue-date-picker'

  export default {
    name: 'UserForm',
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters(['muser'])
    },
    components: { datepicker },
    methods: {
      ...mapActions(['save']),
      saveUser(user) {
        this.save(user)
      }
    },
    created: function () {
    },
    watch: {
    }
  }

</script>

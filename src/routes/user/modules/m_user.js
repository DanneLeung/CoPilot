import { createAction, handleAction } from 'vuex-actions'
import * as API from 'apis/user'

// ------------------------------------
// States
// ------------------------------------
const state = {
  user: {
    username: ''
  }
}

// ------------------------------------
// Getters
// ------------------------------------
const getters = {
  user: state => state.user
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const actions = {
  list: createAction(API.USER_LIST, API.list),
  create: createAction(API.USER_CREATE, API.add)
}

// ------------------------------------
// Mutations
// ------------------------------------
const mutations = {
  [API.USER_LIST]: handleAction({
    success(state, users) {
      window.console.log(users)
    }
  }),
  [API.USER_CREATE]: handleAction({
    success(state, user) {
      window.console.log(user)
      this.$route.push('/user')
    }
  })
}

export default {
  state,
  getters,
  actions,
  mutations
}

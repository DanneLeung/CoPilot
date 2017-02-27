import { createAction, handleAction } from 'vuex-actions'
import * as API from 'apis/user'

// ------------------------------------
// States
// ------------------------------------
const state = {
  users: []
}

// ------------------------------------
// Getters
// ------------------------------------
const getters = {
  userList: state => state.users
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const actions = {
  list: createAction(API.USER_LIST, API.list)
}

// ------------------------------------
// Mutations
// ------------------------------------
const mutations = {
  [API.USER_LIST]: handleAction({
    success(state, users) {
      window.console.log(users)
      state.users = users
    }
  })
}

export default {
  state,
  getters,
  actions,
  mutations
}

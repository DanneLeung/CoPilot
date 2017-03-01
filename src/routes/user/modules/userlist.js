// import { createAction, handleAction } from 'vuex-actions'
// import * as API from 'apis/user'

// ------------------------------------
// States
// ------------------------------------
const state = {
  css: {
    tableClass: 'table table-striped table-bordered'
  },
  fields: [
    'name', 'email', 'birthdate',
    {
      name: 'address.line1',
      title: 'Address 1'
    },
    {
      name: 'address.line2',
      title: 'Address 2'
    },
    {
      name: 'address.zipcode',
      title: 'Zipcode'
    }
  ]
}

// ------------------------------------
// Getters
// ------------------------------------
const getters = {
  css: state => state.css,
  fields: state => state.fields
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const actions = {
  // list: createAction(API.USER_LIST, API.list)
}

// ------------------------------------
// Mutations
// ------------------------------------
const mutations = {
  // [API.USER_LIST]: handleAction({
  //   success(state, users) {
  //     window.console.log(users)
  //   }
  // })
}

export default {
  state,
  getters,
  actions,
  mutations
}

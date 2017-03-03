import { createAction, handleAction } from 'vuex-actions'
import * as API from 'apis/user'

export const USER_CREATE = 'USER_CREATE'
export const USER_LOAD = 'USER_LOAD'
export const USER_REMOVE = 'USER_REMOVE'
export const USER_LIST = 'USER_LIST'
export const USER_SAVE = 'USER_SAVE'
// ------------------------------------
// States
// ------------------------------------
const state = {
  id: '',
  deleted: '',
  edited: '',
  muser: {
    _id: '',
    username: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    enabled: true
  },
  errmsg: ''
}

// ------------------------------------
// Getters
// ------------------------------------
const getters = {
  id: state => state.id,
  deleted: state => state.deleted,
  edited: state => state.edited,
  muser: state => state.muser,
  errmsg: state => state.errmsg
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const actions = {
  load: createAction(USER_LOAD, id => API.load(id)),
  create: createAction(USER_CREATE),
  remove: createAction(USER_REMOVE, id => API.remove(id)),
  save: createAction(USER_SAVE, user => { return user._id ? API.update(user._id, user) : API.create(user) })
}

// ------------------------------------
// Mutations
// ------------------------------------
const mutations = {
  [USER_LOAD]: handleAction({
    success(state, user) {
      state.muser = user
    }
  }),
  [USER_CREATE]: handleAction({
    success(state, user) {
      state.muser = { username: '', mobile: '', email: '', password: '', confirmPassword: '', enabled: true }
    }
  }),
  [USER_REMOVE]: handleAction({
    success(state, user) {
      state.deleted = user
    }
  }),
  [USER_SAVE]: handleAction({
    success(state, user) {
      state.edited = user
      state.muser = user
    }
  })
}

export default {
  state,
  getters,
  actions,
  mutations
}

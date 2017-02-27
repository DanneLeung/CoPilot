import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import plugins from './plugins'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  localStorage.clear()
}

Vue.use(Vuex)

const state = {
  callingAPI: false,
  searching: '',
  serverURI: 'http://localhost:4040/api',
  user: null,
  token: null,
  userInfo: {
    messages: [{ 1: 'test', 2: 'test' }],
    notifications: [],
    tasks: []
  }
}

const mutations = {
  TOGGLE_LOADING(state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING(state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_TOKEN(state, token) {
    state.token = token
  }
}

export default new Vuex.Store({
  strict: __DEV__,
  state: state,
  mutations: mutations,
  modules: modules,
  plugins: plugins
})

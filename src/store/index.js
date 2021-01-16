import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    detail: null,
    currentPage: null,
    params: null

  },
  mutations: {
    saveDetail(state, detail) {
      state.detail = detail
    },
    saveCurrentPage(state, params) {
      state.currentPage = params
    },
    saveParams(state, params) {
      state.params = params
    }
  },
  getters: {
    myDetail(state) {
      return state.detail
    },
    myCurrentPage(state) {
      return state.currentPage
    },
    myParams(state) {
      return state.params
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],

})

export default store

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    detail: null,
    total_count: null,
    tableData: null,
    currentPage: null
  },
  mutations: {
    saveTableData(state, params) {
      state.tableData = params
    },
    saveTotal(state, params) {
      state.total_count = params
    },
    saveDetail(state, params) {
      state.detail = params
    },
    saveCurrentPage(state, params) {
      state.currentPage = params
    }
  },
  getters: {
    myDetail(state) {
      return state.detail
    },
    myTableData(state) {
      return state.tableData
    },
    myTotal(state) {
      return state.total_count
    },
    myCurrentPage(state) {
      return state.currentPage
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],

})

export default store

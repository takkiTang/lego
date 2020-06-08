import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    actived: null
  },
  getters: {
    actived: state => state.actived
  },
  mutations: {
    UPDATE(state, data) {
      state.actived = data
    }
  },
  actions: {
    update({
      commit,
      state
    }, data) {
      commit('UPDATE', data)
    }
  }
})
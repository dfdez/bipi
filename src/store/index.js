import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    last_id: 0
  },
  mutations: {
    changeId(state, id) {
      state.last_id = id;
    }
  }
})

export default store

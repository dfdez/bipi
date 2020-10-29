import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    last_id: null,
    cars: []
  },
  mutations: {
    changeId(state, id) {
      state.last_id = id;
    },
    changeCars(state, newList){
      state.cars = newList;
    }
  },
})

export default store

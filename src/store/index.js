import Vue from 'vue'
import Vuex from 'vuex'
let data = require('../assets/mock.json')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    last_id: null,
    cars: data
    // cars: []
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

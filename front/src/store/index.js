import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    last_id: null,
    cars: [],
    car: {}
  },
  mutations: {
    changeId(state, id) {
      state.last_id = id;
    },
    changeCar(state, car){
      state.car = car
    },
    changeCars(state, newList){
      state.cars = newList;
    }
  },
})

export default store

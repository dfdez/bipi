import Vue from "vue";
import Vuex from "vuex";
import Utils from '../utils/index.js'

Vue.use(Vuex);

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
    changeCar(state, car) {
      state.car = car;
    },
    updatePets(state, { pets, sort }) {
      const petsArray = pets || state.cars
      state.cars = sort ? Utils.sortPets({ pets: petsArray, sort }) : petsArray;
    },
  },
});

export default store;

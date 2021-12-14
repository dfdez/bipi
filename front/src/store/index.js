import Vue from "vue";
import Vuex from "vuex";
import Utils from '../utils/index.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cars: [],
    links: {},
    car: {},
  },
  mutations: {
    changeId(state, id) {
      state.last_id = id;
    },
    changeCar(state, car) {
      state.car = car;
    },
    updatePets(state, { pets, sort, headers }) {
      const petsArray = pets || state.cars
      state.cars = sort ? Utils.sortPets({ pets: petsArray, sort }) : petsArray;
      if (headers) state.links = Utils.parseHeaders(headers)
    },
  },
});

export default store;

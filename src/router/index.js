import Vue from 'vue'
import VueRouter from 'vue-router'

import CarList from "../pages/CarList.vue";
import CarInfo from "../pages/CarInfo.vue";


Vue.use(VueRouter);

const routes = [
  { path: '/', component: CarList },
  { path: '/info', component: CarInfo },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router

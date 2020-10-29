import Vue from 'vue'
import VueRouter from 'vue-router'

import CarList from "../pages/CarList.vue";
import CarInfo from "../pages/CarInfo.vue";


Vue.use(VueRouter);

const routes = [
  { path: '/', name: "List", component: CarList },
  { path: '/info', name: "Info", component: CarInfo,
    beforeEnter: (to, _, next) => {
      if (to.query.id != null) next();
      else next('/');
    }
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router

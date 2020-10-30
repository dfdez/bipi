import Vue from 'vue'
import VueRouter from 'vue-router'

import CarList from "../pages/CarList.vue";
import CarInfo from "../pages/CarInfo.vue";
import Error from "../pages/Error.vue";

import store from '../store'
import { getCars, getCar } from '../api/cars'

Vue.use(VueRouter);

const routes = [
  { path: '/', name: "List", component: CarList,
    beforeEnter: async (_,__,next) => {
      await getCars().then(r => {
        store.commit("changeCars", r.data)
        next();
      }).catch(()=>{ next('/404'); })
    }
  },
  { path: '/info', name: "Info", component: CarInfo,
    beforeEnter: async (to, _,next) => {
      let id = to.query.id;
      if (id == null) next('/');
      else  {
        await getCar(id).then(r => {
          store.commit('changeId', id);
          store.commit('changeCar', r.data)
          next();
        }).catch((err) => {
          err = err.response.data
          if (err.code == "400") next('/');
          else  next('/404')
        })
      }
    }
  },
  { path: '/404', name: "Error", component: Error },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router

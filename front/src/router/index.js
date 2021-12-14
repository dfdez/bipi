import Vue from "vue";
import VueRouter from "vue-router";

import CarList from "../pages/CarList.vue";
import CarInfo from "../pages/CarInfo.vue";
import Error from "../pages/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: CarList
  },
  {
    path: "/info",
    name: "Info",
    component: CarInfo
  },
  { path: "/404", name: "Error", component: Error },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

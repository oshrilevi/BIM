import Vue from "vue";
import Router from "vue-router";
import homepage from "../components/Homepage.vue";
import pageNotFound from "../components/pageNotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homepage",
      component: homepage
    },
    { path: "*", component: pageNotFound }
  ]
});

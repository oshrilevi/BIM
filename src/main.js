// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import VueTranslate from "vue-translate-plugin";
import router from "./router";
import { store } from "./store/store";

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VueTranslate);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
  mounted() {
    this.$translate.setLang("english");
  }
});

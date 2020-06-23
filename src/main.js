import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.config.productionTip = false;

import ELementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ELementUI)

import headers from "./components/header";
import bottom from "./components/bottom"
Vue.component('headers',headers)
Vue.component('bottom',bottom)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

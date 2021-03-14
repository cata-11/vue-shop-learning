import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRes from "vue-resource";
import { store } from "@/store/store";

Vue.config.productionTip = false;
Vue.use(VueRes);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

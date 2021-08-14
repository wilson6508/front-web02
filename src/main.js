import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Tool from "@/mixins/Tool";
import "@/plugins/bootstrapPlugins";

Vue.mixin(Tool);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
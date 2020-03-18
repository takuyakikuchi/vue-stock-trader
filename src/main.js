import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import App from "./App.vue";
import { routes } from "./routes.js";
import store from "./store/store.js";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-stock-trader-74770.firebaseio.com/";

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

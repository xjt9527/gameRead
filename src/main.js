import Vue from "vue";
// import App from "./bak/App.vue";
import App from "./new/App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/base.less";
// import "lib-flexible";

// 全局注册组件
// import hmheader from "./components/hmheader.vue";
// Vue.component("hm-header", hmheader);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

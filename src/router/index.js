import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 引入子组件
// import Login from '../views/Login.vue'
import User from "../views/user.vue";
// 官网 : 在模块化工程中使用 VueRouter , 必须使用Vue.use()安装一下 (把路由当成vue的插件来使用)
Vue.use(VueRouter);

//2 实例化路由
const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/User" },
    // { path: '/login', name: 'login', component: Login },
    { path: "/user", name: "user", component: User },
  ],
});

export default router;

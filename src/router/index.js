import Vue from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter);

import routes from "./routes";

let router = new VueRouter({
  routes,
//   scrollBehavior(to, from, savedPosition) {
//     return { x: 0, y: 0 };
//   },
});


export default router
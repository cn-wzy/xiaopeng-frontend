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

// 解决vue-router在3.0版本以上重复报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
import Home from "../pages/Home.vue";
import Severity from "../pages/Severity.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Clear from "../pages/Clear.vue";
import Notclear from "../pages/Notclear.vue";
import NotSeverity from "../pages/NotSeverity.vue"
import Fixone from "../pages/Fixone.vue"
import Fixtwo from "../pages/Fixtwo.vue"
import Fixthree from "../pages/Fixthree.vue"
import Error1 from "../pages/Error1.vue"
import Error2 from "../pages/Error2.vue"
export default [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "*",
    redirect: "/home",
  },
  {
    path: "/severity",
    name: "Admin",
    component: Severity,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/severity/clear",
    component: Clear,
  },
  {
    path: "/severity/notclear",
    component: Notclear,
  },
  {
    path: "/notseverity",
    component: NotSeverity
  },
  {
    path: "/fix/3",
    component: Fixone
  },
  {
    path: "/fix/2",
    component: Fixtwo
  },
  {
    path: "/fix/5",
    component: Fixthree
  },
  {
    path: "/error/1",
    component: Error1
  },
  {
    path: "/error/2",
    component: Error2
  }
];

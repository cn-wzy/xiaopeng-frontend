import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from "./router";
import store from "./store";

Vue.use(ElementUI);

import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '39dad4b9bb049f60ccb4dfc058c3d1aa',
  plugin: ['AMap.MouseTool', 'AMap.PolyEditor', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder', 'AMap.DistrictSearch', 'AMap.InfoWindow'],
  v: '1.4.4',
  uiVersion: '1.0',
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})



import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
import user from "./user";
import car from "./car"
import error from './error'
export default new Vuex.Store({
    modules:{
        user,
        car,
        error
    }
})
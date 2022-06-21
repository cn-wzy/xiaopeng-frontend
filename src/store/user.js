import { reqUserLogin } from "../api";
const state = {
  token: localStorage.getItem("TOKEN"),
  loginForm: {
    username: "zhangsan",
    password: "password",
  },
};

const actions = {
  async setUserInfo({ commit }, data) {
    let result = await reqUserLogin(data);
    console.log(result.data.status);
    if (result.data.status === 200) {
      const token = result.data.data.token;
      commit("SETUSERINFO", { data, token });
      localStorage.setItem("TOKEN", token);
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
};

const mutations = {
  SETUSERINFO(state, userInfo) {
    state.token = userInfo.token;
    state.loginForm = userInfo.data;
  },
};

const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};

import { reqErrorHandle } from "../api";
const state = {
  carId: 1,
  errSolution: [],
  errorMsg: {
    carId: 1,
    exceptionId: 0,
    handleId: 5,
  },
};

const actions = {
  async errorHandle({ commit }, handleId) {
    let result = await reqErrorHandle(state.carId, state.errorMsg.exceptionId, handleId);
    console.log(result);
    if (result.data.status === 200) {
      commit("ERRORHANDLE", result.data.data);
    } else {
      console.log("errorhandle");
    }
  },
};

const mutations = {
  ERRORHANDLE(state, data) {
    state.errSolution = data;
  },
};

const getters = {};
export default {
  state,
  getters,
  actions,
  mutations,
};

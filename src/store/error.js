import { reqErrorHandle } from "../api";
const state = {
  carId: 1,
  errSolution: [],
  errorMsg: {
    carId: 1,
    exceptionId: 0,
    handleId: 5,
  },
  endPointList:[],
  endPoint: {
    longitude: 113.37443,
    latitude: 23.0902
  }
};

const actions = {
  async errorHandle({ commit }, handleId) {
    let result = await reqErrorHandle(state.carId, state.errorMsg.exceptionId, handleId);
    console.log(result);
    if (result.data.status === 200) {
        if (handleId === 5) {
            commit("ERRORHANDLE5", result.data.data);
        } else if (handleId === 3) {
            commit("ERRORHANDLE3", result.data.data)
        }
      
    } else {
      console.log("errorhandle");
    }
  },
  chooseEndPoint({commit}, position) {
    commit("CHOOSEENDPOINT", position)
  }
};

const mutations = {
  ERRORHANDLE5(state, data) {
    state.errSolution = data;
  },
  ERRORHANDLE3(state, data) {
    state.endPointList = data;
  },
  CHOOSEENDPOINT(state, data) {
    state.endPoint = data.pos
  }
};

const getters = {};
export default {
  state,
  getters,
  actions,
  mutations,
};

import { reqDataUpload, reqCarInfo } from "../api";
const state = {
  token: localStorage.getItem("TOKEN"),
  carInfo: {
    id: 1,
    userId: 1,
    wheelPressure: 3,
    engineTemperature: 85,
    refrigerantTTemperature: 90,
    airBagPressure: 0,
    wheelRev: 2,
    tensorReport: true,
  },
};

const actions = {
  async dataUpload({ commit }) {
    let result = await reqDataUpload(state.carInfo);
    console.log(result);
  },
  async getCarInfo({ commit }) {
    let result = await reqCarInfo(state.carInfo.id);
    console.log(result.data);
    if (result.data.status === 200) {
      commit("GETCARINFO", result.data.data);
    }
  }
};

const mutations = {
    GETCARINFO(state, carInfo) {
        state.carInfo = carInfo;
    }
};

const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};

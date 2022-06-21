import axios from "axios";
import store from "../store";
const requests = axios.create({ baseURL: "/", timeout: 5000 });

requests.interceptors.request.use((config) => {
  if (store.state.user.token) {
    config.headers.Authorization = store.state.user.token;
  }
  return config;
});
export const reqUserLogin = (data) =>
  requests({ url: "/auth/login", data, method: "post" });

export const reqDataUpload = (data) =>
  requests({ url: "/defect/upload", data, method: "post" });

export const reqCarInfo = (carId) =>
  requests({ url: `/car/check/${carId}`, method: "get" });

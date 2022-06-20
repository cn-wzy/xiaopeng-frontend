import axios from "axios";

const requests = axios.create({
  timeout: 5000,
});

export const reqUserLogin = (data) => {
  requests({ url: "xxx", data, method: "post" });
};

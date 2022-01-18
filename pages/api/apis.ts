// api.js
import Axios from "axios";

let urls = {
  test: "https://61e6897fce3a2d0017359232.mockapi.io/",
  development: "http://localhost:3333/",
  production: "https://your-production-url.com/"
};

const api = Axios.create({
  baseURL: urls.test,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default api;

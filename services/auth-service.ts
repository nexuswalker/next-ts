import axios from "axios";

const API_URL = "https://61e6897fce3a2d0017359232.mockapi.io/";

export const login = (username: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      username,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  console.log(localStorage.getItem("user"));
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};
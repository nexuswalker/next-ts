import axios, { AxiosError } from "axios";
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  useQueryClient
} from "react-query";

const API_URL = "https://61e6897fce3a2d0017359232.mockapi.io/";

type loginInfo = {
  username: string;
  password: string;
};

export const betterLogin = async (data: loginInfo) => {
  const { data: response } = await axios.post(API_URL + "login", data);
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

/*export const login = async (username: string, password: string) => {
  const response = await axios.post(API_URL + "login", {
    username,
    password
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};*/

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};

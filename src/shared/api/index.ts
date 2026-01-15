import axios from "axios";
import { BASE_URL } from "./baseUrl";
import i18n from "../config/i18n";
import { LOCAL_STORAGE_TOKEN_KEY } from "../constants";

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

    config.headers["Accept-Language"] = i18n.language;

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default API;

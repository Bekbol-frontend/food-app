import axios from "axios";
import { BASE_URL } from "./baseUrl";
import i18n from "../config/i18n";

i18n.language;

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  config.headers = config.headers ?? {};

  config.headers["Accept-Language"] = i18n.language;

  return config;
});

export default API;

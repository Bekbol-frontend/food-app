import { LOCAL_STORAGE_TOKEN_KEY } from "@/shared/constants";

export const getTokenLocalStorage = () =>
  localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) ?? null;

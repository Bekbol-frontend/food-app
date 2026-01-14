import API from "@/shared/api";
import type { IData } from "@/shared/types";
import type { IProduct } from "../types";

export const getProducts = async () => {
  return await API.get<IData<IProduct[]>>("/api/v1/products");
};

export const createProduct = async (data: FormData) => {
  return await API.post<IData<IProduct>>("/api/v1/products", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

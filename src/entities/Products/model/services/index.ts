import API from "@/shared/api";
import type { IData } from "@/shared/types";
import type { IProduct } from "../types";

export const getProducts = async (search: string) => {
  const params: Record<string, string> = {};

  if (search) {
    params.search = search;
  }

  return await API.get<IData<IProduct[]>>("/api/v1/products", {
    params,
  });
};

export const createProduct = async (data: FormData) => {
  return await API.post<IData<IProduct>>("/api/v1/products", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteProduct = async (id: number) => {
  return await API.delete<IData<IProduct>>(`/api/v1/products/${id}`);
};

export const getProductById = async (id: number) => {
  return await API.get<IData<IProduct>>(`/api/v1/products/${id}`);
};

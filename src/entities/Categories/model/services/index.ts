import API from "@/shared/api";
import type { IData } from "@/shared/types";
import type { ICategory, ICategoryForm } from "../types";

export const getCategories = async () => {
  return await API.get<IData<ICategory[]>>("/api/v1/categories");
};

export const crateCategory = async (data: ICategoryForm) => {
  return await API.post<IData<ICategory>>("/api/v1/categories", data);
};

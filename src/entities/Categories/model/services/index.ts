import API from "@/shared/api";
import type { IData } from "@/shared/types";
import type { ICategory, ICategoryForm } from "../types";

export const getCategories = async () => {
  return await API.get<IData<ICategory[]>>("/api/v1/categories");
};

export const crateCategory = async (data: ICategoryForm) => {
  return await API.post<IData<ICategory>>("/api/v1/categories", data);
};

export const getCategoryById = async (id: number) => {
  return await API.get<IData<ICategory>>(`/api/v1/categories/${id}`);
};

export const updateCategory = async ({
  data,
  id,
}: {
  data: ICategoryForm;
  id: number;
}) => {
  return await API.put<IData<ICategory>>(`/api/v1/categories/${id}`, data);
};

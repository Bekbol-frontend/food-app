import type { IPropertyLang } from "@/shared/types";

export interface ICategory {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface ICategoryForm {
  name: IPropertyLang;
}

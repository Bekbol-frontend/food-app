import type { IPropertyLang } from "@/shared/types";

export interface IProduct {
  id: number;
  category_name: string;
  image: string;
  price: number;
  name: string;
  description: string;
  is_available: boolean;

  created_at: string;
  updated_at: string;
}

export interface IProductForm {
  category_id: number;
  price: number;
  is_available?: boolean;
  image: string;

  name: IPropertyLang;
  description?: IPropertyLang;
}

import type { IPropertyLang } from "@/shared/types";
import type { FormInstance } from "antd";
import type { MessageInstance } from "antd/es/message/interface";

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

export interface IMutationCategoryProps {
  form: FormInstance<any>;
  closeModal: () => void;
  messageApi: MessageInstance;
}

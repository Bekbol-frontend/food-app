export interface IData<T> {
  success: boolean;
  message: string;
  data: T;
  code: number;
}

export interface IPropertyLang {
  uz: string;
  ru: string;
  kk: string;
}

export type TypeLangs = keyof IPropertyLang;

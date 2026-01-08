import type { IUser } from "@/entities/User";

export interface IAuthLoginForm {
  login: string;
  password: string;
}

export interface ILoginSchema {
  isLoading: boolean;
  error?: string;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}

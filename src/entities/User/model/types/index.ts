export interface IUser {
  id: number;
  login: string;
  role: string;
  phone: string;
  created_at: string;
  updated_at: string;
}

export interface IUserShema {
  user: IUser | null;
  token: string | null;
}

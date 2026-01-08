import type { IUserShema } from "@/entities/User";
import type { ILoginSchema } from "@/features/AuthLogin";

export interface IStateSchema {
  user: IUserShema;
  login: ILoginSchema;
}

import type { IStateSchema } from "@/app/providers/AppStoreProvider";
import type { IUserShema } from "@/entities/User";
import { useSelector } from "react-redux";

export function useGetAuth(): IUserShema {
  return useSelector((state: IStateSchema) => state.user);
}

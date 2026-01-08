import type { IUser } from "@/entities/User";
import { LOCAL_STORAGE_USER_KEY } from "@/shared/constants";

export function getUserLocalStorage() {
  const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

  return user ? (JSON.parse(user) as IUser) : null;
}

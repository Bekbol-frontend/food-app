import type { AppDispatch } from "@/app/providers/AppStoreProvider";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch.withTypes<AppDispatch>();

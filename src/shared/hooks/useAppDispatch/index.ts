import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/app/providers/AppStoreProvider";

export const useAppDispatch = () => useDispatch<AppDispatch>();

import { configureStore } from "@reduxjs/toolkit";
import type { IStateSchema } from "../types";
import { userReducer } from "@/entities/User";
import { loginReducer } from "@/features/AuthLogin";

export const store = configureStore<IStateSchema>({
  reducer: {
    user: userReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

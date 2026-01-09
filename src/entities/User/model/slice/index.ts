import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser, IUserShema } from "../types";
import { getUserLocalStorage } from "@/shared/lib/getUserLocalStorage";
import { getTokenLocalStorage } from "@/shared/lib/getTokenLocalStorage";
import {
  LOCAL_STORAGE_TOKEN_KEY,
  LOCAL_STORAGE_USER_KEY,
} from "@/shared/constants";

const initialState: IUserShema = {
  user: getUserLocalStorage(),
  token: getTokenLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin(
      state,
      { payload }: PayloadAction<{ user: IUser; token: string }>
    ) {
      state.user = payload.user;
      state.token = payload.token;

      localStorage.setItem(
        LOCAL_STORAGE_USER_KEY,
        JSON.stringify(payload.user)
      );
      localStorage.setItem(
        LOCAL_STORAGE_TOKEN_KEY,
        JSON.stringify(payload.token)
      );
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

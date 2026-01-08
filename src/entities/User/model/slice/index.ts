import { createSlice } from "@reduxjs/toolkit";
import type { IUserShema } from "../types";
import { getUserLocalStorage } from "@/shared/lib/getUserLocalStorage";
import { getTokenLocalStorage } from "@/shared/lib/getTokenLocalStorage";

const initialState: IUserShema = {
  user: getUserLocalStorage(),
  token: getTokenLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

import { createSlice } from "@reduxjs/toolkit";
import type { ILoginSchema } from "../types";
import { fetchLogin } from "../services/fetchLogin";

const initialState: ILoginSchema = {
  isLoading: false,
  error: undefined,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchLogin.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.isLoading = false;
        state.error = "error";
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

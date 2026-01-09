import API from "@/shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IAuthLoginForm, ILoginResponse } from "../types";
import type { IData } from "@/shared/types";
import type { AxiosError } from "axios";

export const fetchLogin = createAsyncThunk<
  ILoginResponse,
  IAuthLoginForm,
  { rejectValue: string }
>("login/fetchLogin", async (data, { rejectWithValue }) => {
  try {
    const res = await API.post<IData<ILoginResponse>>("/api/v1/login", data);

    if (!res.data.success) {
      throw new Error("The provided credentials are incorrect.");
    }

    return res.data.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

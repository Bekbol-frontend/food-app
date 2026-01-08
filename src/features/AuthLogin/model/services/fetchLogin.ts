import API from "@/shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IAuthLoginForm, ILoginResponse } from "../types";
import type { IData } from "@/shared/types";

export const fetchLogin = createAsyncThunk<ILoginResponse, IAuthLoginForm>(
  "login/fetchLogin",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API.post<IData<ILoginResponse>>("/api/v1/login", data);

      console.log(res);

      return res.data.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

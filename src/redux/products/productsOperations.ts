import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const getProducts = createAsyncThunk<
  TProductsArr,
  void,
  {
    rejectValue: string;
  }
>("products/getProductsAll", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${BASE_URL}products`);
    return res.data.data.result;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

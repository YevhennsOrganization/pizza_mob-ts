import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.BASE_URL;
axios.defaults.baseURL = BASE_URL;

export const getProducts = createAsyncThunk<
  TProductsArr,
  void,
  {
    rejectValue: string;
  }
>("products/getProductsAll", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get("/products");
    return res.data.data.result as TProductsArr;
  } catch (error: any) {
    return rejectWithValue(error.message as string);
  }
});
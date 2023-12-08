import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.BASE_URL;
axios.defaults.baseURL = BASE_URL;

export const getProducts = createAsyncThunk(
  "products/getProductsAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/products");
      return res.data.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

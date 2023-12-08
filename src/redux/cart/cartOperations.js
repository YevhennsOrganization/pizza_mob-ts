import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.BASE_URL;
axios.defaults.baseURL = BASE_URL;

export const sendOrder = createAsyncThunk(
  "cart/sendOrder",
  async (order, { rejectWithValue }) => {
    try {
      const res = await axios.post("/send_email", {
        body: JSON.stringify(order),
      });
      return res.status;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

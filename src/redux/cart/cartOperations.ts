import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.BASE_URL;
axios.defaults.baseURL = BASE_URL;

export const sendOrder = createAsyncThunk<
  number,
  TSummaryOrder,
  {
    rejectValue: string;
  }
>("cart/sendOrder", async (order, { rejectWithValue }) => {
  try {
    const res = await axios.post("/send_email", {
      body: JSON.stringify(order),
    });
    return res.status;
  } catch (error: any) {
    return rejectWithValue(error.message as string);
  }
});

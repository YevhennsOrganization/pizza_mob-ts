import { createSlice } from "@reduxjs/toolkit";
import { sendOrder } from "./cartOperations";
import { RootState } from "../store";

const initialState = {
  filledCart: [] as TCart,
  customerInfo: {} as TInfo,
  orderSum: 0,
  error: null as any,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: { payload: TCartItem }) {
      state.filledCart = [...state.filledCart, action.payload];
    },
    deleteItem(state, action: { payload: string }) {
      state.filledCart = state.filledCart.filter(
        (item) => item._id !== action.payload
      );
    },
    addInfo(state, action: { payload: TInfo }) {
      state.customerInfo = action.payload;
    },
    deleteAllItems(state) {
      state.filledCart = [];
      state.customerInfo = {} as TInfo;
    },
    addOrderSum(state, action: { payload: number }) {
      state.orderSum = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(sendOrder.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        if (!action.payload) {
          state.error = true;
          state.isLoading = false;
          return;
        }
        if (action.payload === 201) {
          state.isLoading = false;
        }
      })
      .addCase(sendOrder.rejected, (state, action) => {
        console.log("err");
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const cartReducer = cartSlice.reducer;

export const getFilledCart = (state: RootState) => state.cart.filledCart;
export const getCustomerInfo = (state: RootState) => state.cart.customerInfo;
export const getOrderSum = (state: RootState) => state.cart.orderSum;
export const getIsLoading = (state: RootState) => state.cart.isLoading;
export const getError = (state: RootState) => state.cart.error;

export const { addItem } = cartSlice.actions;
export const { deleteItem } = cartSlice.actions;
export const { addInfo } = cartSlice.actions;
export const { deleteAllItems } = cartSlice.actions;
export const { addOrderSum } = cartSlice.actions;

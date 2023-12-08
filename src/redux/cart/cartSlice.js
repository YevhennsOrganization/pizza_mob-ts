import { createSlice } from "@reduxjs/toolkit";
import { sendOrder } from "./cartOperations";

const initialState = {
  filledCart: [],
  customerInfo: {},
  orderSum: 0,
  error: null,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.filledCart = [...state.filledCart, action.payload];
    },
    deleteItem(state, action) {
      state.filledCart = state.filledCart.filter(
        (item) => item._id !== action.payload
      );
    },
    addInfo(state, action) {
      state.customerInfo = action.payload;
    },
    deleteAllItems(state) {
      state.filledCart = [];
      state.customerInfo = {};
    },
    addOrderSum(state, action) {
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

export const getFilledCart = (state) => state.cart.filledCart;
export const getCustomerInfo = (state) => state.cart.customerInfo;
export const getOrderSum = (state) => state.cart.orderSum;
export const getIsLoading = (state) => state.cart.isLoading;
export const getError = (state) => state.cart.error;

export const { addItem } = cartSlice.actions;
export const { deleteItem } = cartSlice.actions;
export const { addInfo } = cartSlice.actions;
export const { deleteAllItems } = cartSlice.actions;
export const { addOrderSum } = cartSlice.actions;

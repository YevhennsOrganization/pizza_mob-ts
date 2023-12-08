import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  deleteAllItems,
  deleteItem,
  getFilledCart,
  getOrderSum,
} from "../redux/cart/cartSlice";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";
import CartContent from "../modules/Cart/CartContent";

const Cart = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const filledCart = useAppSelector(getFilledCart);
  const sum = useAppSelector(getOrderSum);
  // const isLoading = useAppSelector(getIsLoading);
  // const err = useAppSelector(getError);

  const deleteCartItem = (id: string) => {
    dispatch(deleteItem(id));
  };

  const openModal = () => {
    setOpen(true);
  };

  const deleteAllProducts = () => {
    dispatch(deleteAllItems());
    setOpen(false);
  };

  return (
    <PagesWrapper>
      <div className={css.cartWrapper}>
        <CartContent
          filledCart={filledCart}
          deleteCartItem={deleteCartItem}
          deleteAllProducts={deleteAllProducts}
          openModal={openModal}
        />
        {open && (
          <FinalModal
            finalAction={deleteAllProducts}
            filledCart={filledCart}
            sum={sum}
            isLoading={isLoading}
            err={err}
          />
        )}
      </div>
    </PagesWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cart;

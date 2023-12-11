import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CartListItem from "./components/CartListItem/CartListItem";
import Button from "../../../UI/Button/Button";
import { useAppDispatch } from "../../../redux/hooks";
import { addOrderSum } from "../../../redux/cart/cartSlice";

interface Props {
  filledCart: TCart;
  deleteCartItem: (_id: string) => void;
  deleteAllProducts: () => void;
}

const CartList = ({ filledCart, deleteCartItem, deleteAllProducts }: Props) => {
  let sum = 0;
  filledCart.forEach((item) => (sum += item.totalPrice));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addOrderSum(sum));
  }, [dispatch, sum]);

  return (
    <View style={CartListCSS.cartList}>
      {filledCart.map((data) => {
        return (
          <CartListItem
            key={data._id}
            deleteCartItem={deleteCartItem}
            data={data}
          />
        );
      })}
      <Text style={CartListCSS.totalPayment}>До оплати {sum} грн</Text>
      <Button onPress={deleteAllProducts}>
        <Text>Очистити кошик</Text>
      </Button>
    </View>
  );
};

const CartListCSS = StyleSheet.create({
  cartList: {
    marginBottom: 20,
  },
  totalPayment: {
    // font-family: var(--secondary-font);
    marginBottom: 20,
    textAlign: "center",
  },
});

export default CartList;

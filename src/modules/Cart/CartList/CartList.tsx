import React, { useEffect } from "react";
import { Text, View } from "react-native";
import CartListItem from "./CartListItem/CartListItem";
import Button from "../../../UI/Button/Button";
import { useAppDispatch } from "../../../redux/hooks";
import { addOrderSum } from "../../../redux/cart/cartSlice";
import { CartListCSS } from "./CartList.styles";

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
        <Text style={CartListCSS.buttonText}>Очистити кошик</Text>
      </Button>
    </View>
  );
};

export default CartList;

import React, { FC } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import RoundButton from "../../../../../UI/RoundButton/RoundButton";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  data: TCartItem;
  deleteCartItem: (_id: string) => void;
}

const CartListItem: FC<Props> = ({ data, deleteCartItem }) => {
  const { _id, photo, title, quantity, totalPrice } = data;

  return (
    <View style={CartListItemCSS.cartListItem}>
      <Image source={{ uri: photo }} width={50} height={50} />
      <Text>{title}</Text>
      <Text>{quantity}</Text>
      <Text>{totalPrice} грн</Text>
      <RoundButton onPress={() => deleteCartItem(_id)}>
        <FontAwesome name="remove" size={24} color="black" />
      </RoundButton>
    </View>
  );
};

const CartListItemCSS = StyleSheet.create({
  cartListItem: {
    // display: "grid",
    // gr: 50px 1fr 20px 65px 32px;
    gap: 5,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    // font-family: var(--secondary-font);
  },
});

export default CartListItem;

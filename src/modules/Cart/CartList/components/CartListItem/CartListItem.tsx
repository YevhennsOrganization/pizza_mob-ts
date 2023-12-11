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
      <Image
        style={{ flexBasis: 50 }}
        source={{ uri: photo }}
        width={50}
        height={50}
      />
      <Text style={{ flexGrow: 1 }}>{title}</Text>
      <Text style={{ flexBasis: 20 }}>{quantity}</Text>
      <Text style={{ flexBasis: 65 }}>{totalPrice} грн</Text>
      <RoundButton
        style={{ flexBasis: 32 }}
        onPress={() => deleteCartItem(_id)}
      >
        <FontAwesome name="remove" size={24} color="#de612b" />
      </RoundButton>
    </View>
  );
};

const CartListItemCSS = StyleSheet.create({
  cartListItem: {
    flexDirection: "row",
    gap: 5,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    // font-family: var(--secondary-font);
  },
});

export default CartListItem;

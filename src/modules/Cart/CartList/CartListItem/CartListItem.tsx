import React, { FC } from "react";
import { Text, View, Image } from "react-native";
import RoundButton from "../../../../UI/RoundButton/RoundButton";
import { FontAwesome } from "@expo/vector-icons";
import { CartListItemCSS } from "./CartListItem.styles";

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

export default CartListItem;

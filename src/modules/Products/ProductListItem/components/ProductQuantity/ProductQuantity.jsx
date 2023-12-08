import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import RoundButton from "../../../../../UI/RoundButton/RoundButton";
import { Entypo } from "@expo/vector-icons";

const ProductQuantity = ({ getTotalQuantity }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    getTotalQuantity(quantity);
  }, [getTotalQuantity, quantity]);

  return (
    <View style={productQuantityCSS.wrapper}>
      <RoundButton
        onClick={decrement}
        disabled={quantity === 1}
        aria-label="minus"
      >
        <Entypo name="chevron-thin-left" size={24} color="black" />
      </RoundButton>
      <Text style={productQuantityCSS.quantityText}>{quantity} шт.</Text>
      <RoundButton onClick={increment} aria-label="plus">
        <Entypo name="chevron-thin-right" size={24} color="black" />
      </RoundButton>
    </View>
  );
};

const productQuantityCSS = StyleSheet.create({
  wrapper: {
    display: flex,
    alignItems: center,
    marginTop: auto,
    gap: 5,
  },
  // quantityText: {
  //       font-family: var(--secondary-font);
  //   }
});

export default ProductQuantity;

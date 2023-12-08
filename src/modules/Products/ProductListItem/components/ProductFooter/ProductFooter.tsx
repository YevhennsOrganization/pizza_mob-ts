import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../../../../../UI/Button/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type ProductFooterProps = {
  addToCart: TAddToCart;
  isInCart: (_id: string) => boolean;
} & TProductItem;

const ProductFooter = ({
  _id,
  totalQuantity,
  promotion,
  totalPrice,
  totalPromPrice,
  addToCart,
  isInCart,
}: ProductFooterProps) => {
  const isInCartBoolean = isInCart(_id);

  return (
    <View style={css.productFooter}>
      {promotion ? (
        <View style={css.priceWrapper}>
          <Text style={css.oldPrice}>{totalPrice} грн</Text>
          <Text style={css.promPrice}>{totalPromPrice} грн</Text>
        </View>
      ) : (
        <Text style={css.price}>{totalPrice} грн</Text>
      )}
      <Button
        disabled={isInCartBoolean}
        onPress={() =>
          addToCart(_id, totalQuantity, promotion, totalPrice, totalPromPrice)
        }
      >
        {isInCartBoolean ? (
          <>
            <MaterialCommunityIcons
              name="basket-outline"
              size={24}
              color="black"
            />
            В кошику
          </>
        ) : (
          <>В кошик</>
        )}
      </Button>
    </View>
  );
};

const css = StyleSheet.create({
  productFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    // font-family: var(--main-font);
    fontSize: 18,
    // color: var(--black-color);
    fontWeight: "700",
  },
  priceWrapper: {
    flexDirection: "column",
  },
  promPrice: {
    // font-family: var(--main-font);
    fontSize: 18,
    // color: var(--accent-color);
    fontWeight: "700",
  },
  oldPrice: {
    // font-family: var(--main-font);
    fontSize: 16,
    // color: var(--black-color);
    fontWeight: "700",
    textDecoration: "line - through",
  },
});

export default ProductFooter;

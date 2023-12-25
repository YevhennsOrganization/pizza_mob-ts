import React from "react";
import { View, Text } from "react-native";
import Button from "../../../../UI/Button/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProductFooterCSS } from "./ProductFooter.styles";

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
    <View style={ProductFooterCSS.productFooter}>
      {promotion ? (
        <View style={ProductFooterCSS.priceWrapper}>
          <Text style={ProductFooterCSS.oldPrice}>{totalPrice} грн</Text>
          <Text style={ProductFooterCSS.promPrice}>{totalPromPrice} грн</Text>
        </View>
      ) : (
        <Text style={ProductFooterCSS.price}>{totalPrice} грн</Text>
      )}
      <Button
        disabled={isInCartBoolean}
        onPress={() =>
          addToCart(_id, totalQuantity, promotion, totalPrice, totalPromPrice)
        }
      >
        {isInCartBoolean ? (
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="basket-outline"
              size={24}
              color="black"
            />
            <Text>В кошику</Text>
          </View>
        ) : (
          <View>
            <Text>В кошик</Text>
          </View>
        )}
      </Button>
    </View>
  );
};

export default ProductFooter;

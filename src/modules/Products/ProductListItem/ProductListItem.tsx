import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ProductQuantity from "./components/ProductQuantity/ProductQuantity";
import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from "../../../redux/products/productsSlice";
import ProductFooter from "./components/ProductFooter/ProductFooter";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import RoundButton from "../../../UI/RoundButton/RoundButton";
import { AntDesign } from "@expo/vector-icons";
import { useAppDispatch } from "../../../redux/hooks";
import Toast from "react-native-toast-message";

type ProductListItemProps = {
  item: TProduct;
  addToCart: TAddToCart;
  setFavoriteProducts: (_id: string) => boolean;
  favoriteProducts: TProductsArr;
  isInCart: (_id: string) => boolean;
};

const ProductListItem = ({
  item,
  addToCart,
  setFavoriteProducts,
  favoriteProducts,
  isInCart,
}: ProductListItemProps) => {
  const {
    _id,
    title,
    description,
    dimension,
    price,
    photo,
    promotion,
    promPrice,
  } = item;

  const [totalPrice, setTotalPrice] = useState(price);
  const [totalPromPrice, setTotalPromPrice] = useState(promPrice);
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(setFavoriteProducts(_id));

  const dispatch = useAppDispatch();

  const getTotalQuantity = (quantity: number) => {
    setTotalQuantity(quantity);
    setTotalPrice(price * quantity);
    setTotalPromPrice(promPrice * quantity);
  };

  const addToFavorite = () => {
    if (favoriteProducts.some((item) => item._id === _id)) {
      setIsFavorite(false);
      dispatch(removeFromFavoriteAction(_id));
      Toast.show({
        type: "info",
        text1: "Видалено з улюблених",
      });
    } else {
      setIsFavorite(true);
      dispatch(addToFavoriteAction(item));
      Toast.show({
        type: "success",
        text1: "Додано в улюблені",
      });
    }
  };

  return (
    <View style={css1.listItem}>
      {promotion && (
        <View style={css1.promotion}>
          <Text style={{ color: "#fff" }}>Акція</Text>
        </View>
      )}
      <View style={css1.favorite}>
        <RoundButton aria-label="add to favorite" onPress={addToFavorite}>
          {isFavorite ? (
            <AntDesign name="heart" size={40} color="#de612b" />
          ) : (
            <AntDesign name="hearto" size={40} color="black" />
          )}
        </RoundButton>
      </View>
      <ProductDescription
        photo={photo}
        title={title}
        description={description}
        dimension={dimension}
      />
      <ProductQuantity getTotalQuantity={getTotalQuantity} />
      <ProductFooter
        _id={_id}
        totalQuantity={totalQuantity}
        promotion={promotion}
        totalPrice={totalPrice}
        totalPromPrice={totalPromPrice}
        addToCart={addToCart}
        isInCart={isInCart}
      />
    </View>
  );
};

const css1 = StyleSheet.create({
  listItem: {
    backgroundColor: "#fff",
    color: "black",
    padding: 24,
    borderRadius: 10,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 350,
    gap: 10,
  },
  promotion: {
    position: "absolute",
    top: 24,
    left: 24,
    backgroundColor: "#de612b",
    // background-color: var(--accent-color);
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    // color: var(--white-color);
    // font-family: var(--main-font);
  },
  favorite: {
    position: "absolute",
    right: 24,
    top: 24,
  },
});

export default ProductListItem;

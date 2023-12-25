import React, { useState } from "react";
import { View, Text } from "react-native";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from "../../../redux/products/productsSlice";
import ProductFooter from "./ProductFooter/ProductFooter";
import ProductDescription from "./ProductDescription/ProductDescription";
import RoundButton from "../../../UI/RoundButton/RoundButton";
import { AntDesign } from "@expo/vector-icons";
import { useAppDispatch } from "../../../redux/hooks";
import Toast from "react-native-toast-message";
import { ProductListItemCSS } from "./ProductListItem.styles";

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
    <View style={ProductListItemCSS.listItem}>
      {promotion && (
        <View style={ProductListItemCSS.promotion}>
          <Text style={{ color: "#fff" }}>Акція</Text>
        </View>
      )}
      <View style={ProductListItemCSS.favorite}>
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

export default ProductListItem;

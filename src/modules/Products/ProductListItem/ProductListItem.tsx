import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ProductQuantity from "./components/ProductQuantity/ProductQuantity";
import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from "../../../redux/products/productsSlice";
// import { toast } from "react-toastify";
import ProductFooter from "./components/ProductFooter/ProductFooter";
// import css from "./ProductListItem.module.scss";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import RoundButton from "../../../UI/RoundButton/RoundButton";
import { AntDesign } from "@expo/vector-icons";
import { useAppDispatch } from "../../../redux/hooks";

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
      // toast.warn("Видалено з улюблених", {
      //   position: "top-center",
      //   autoClose: 1500,
      //   hideProgressBar: true,
      // });
    } else {
      setIsFavorite(true);
      dispatch(addToFavoriteAction(item));
      // toast.success("Додано в улюблені", {
      //   position: "top-center",
      //   autoClose: 1500,
      //   hideProgressBar: true,
      // });
    }
  };

  return (
    <View style={css1.listItem}>
      {promotion && <View style={css1.promotion}>Акція</View>}
      <View style={css1.favorite}>
        <RoundButton aria-label="add to favorite" onPress={addToFavorite}>
          {isFavorite ? (
            <AntDesign name="heart" size={24} color="black" />
          ) : (
            <AntDesign name="hearto" size={24} color="black" />
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
    // box-shadow: 4px 4px 14px 0px rgba(59, 50, 50, 0.25);
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

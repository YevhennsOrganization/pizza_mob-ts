import React from "react";
import { ScrollView } from "react-native";
import ProductListItem from "./ProductListItem/ProductListItem";
import { addItem, getFilledCart } from "../../redux/cart/cartSlice";
import { getFavorites } from "../../redux/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Toast from "react-native-toast-message";

type ProductsListProps = {
  data: TProductsArr;
};

const ProductsList = ({ data }: ProductsListProps) => {
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector(getFavorites);
  const filledCart = useAppSelector(getFilledCart);

  const isInCart = (_id: string) => filledCart.some((item) => item._id === _id);

  const addToCart = (
    _id: string,
    totalQuantity: number,
    promotion: boolean,
    totalPrice: number,
    TotalPromPrice: number
  ) => {
    const chosenProduct = data.find((item) => item._id === _id);
    if (chosenProduct) {
      const { photo, title, _id } = chosenProduct;
      const cartItem = {
        _id: _id,
        photo: photo,
        title: title,
        quantity: totalQuantity,
        totalPrice: totalPrice,
      };
      const cartPromItem = {
        _id: _id,
        photo: photo,
        title: title,
        quantity: totalQuantity,
        totalPrice: TotalPromPrice,
      };
      if (promotion) {
        dispatch(addItem(cartPromItem));
      } else {
        dispatch(addItem(cartItem));
      }
      Toast.show({
        type: "success",
        text1: "Додано у кошик",
      });
    }
  };

  const setFavoriteProducts = (_id: string) => {
    if (favoriteProducts.some((item) => item._id === _id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        rowGap: 20,
        alignItems: "center",
        padding: 10,
      }}
    >
      {data.map((item) => {
        return (
          <ProductListItem
            key={item._id}
            item={item}
            addToCart={addToCart}
            setFavoriteProducts={setFavoriteProducts}
            favoriteProducts={favoriteProducts}
            isInCart={isInCart}
          />
        );
      })}
    </ScrollView>
  );
};

export default ProductsList;

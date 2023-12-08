import React from "react";
import { StyleSheet, View } from "react-native";
import ProductListItem from "./ProductListItem/ProductListItem";
import { addItem, getFilledCart } from "../../redux/cart/cartSlice";
import { getFavorites } from "../../redux/products/productsSlice";
// import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = ({ data }) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(getFavorites);
  const filledCart = useSelector(getFilledCart);

  const isInCart = () => filledCart.some((item) => item._id === _id);

  const addToCart = (
    _id,
    totalQuantity,
    promotion,
    totalPrice,
    TotalPromPrice
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
      // toast.success("Додано у кошик", {
      //   position: "top-center",
      //   autoClose: 1500,
      //   hideProgressBar: true,
      // });
    }
  };

  const setFavoriteProducts = (_id) => {
    if (favoriteProducts.some((item) => item._id === _id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={css.list}>
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
    </View>
  );
};

const css = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default ProductsList;

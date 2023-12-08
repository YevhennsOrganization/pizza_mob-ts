import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";
import { useAppSelector } from "../redux/hooks";
import { getFavorites } from "../redux/products/productsSlice";
import ProductsList from "../modules/Products/ProductsList";
import Empty from "../components/Empty/Empty";

const Favorite = () => {
  // const isLoading = useAppSelector(getIsLoading);
  const favoriteProducts = useAppSelector(getFavorites);

  return (
    <PagesWrapper>
      {/* {isLoading && <LoaderModal />} */}
      {favoriteProducts.length > 0 ? (
        <ProductsList data={favoriteProducts} />
      ) : (
        <Empty text={"Тут нічого немає!"} />
      )}
      {/* <ToastContainer /> */}
    </PagesWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Favorite;

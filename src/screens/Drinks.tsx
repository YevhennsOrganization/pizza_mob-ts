import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";
import ProductsList from "../modules/Products/ProductsList";
import { filterByCategory } from "../helpers/filterByCategory";
import { useAppSelector } from "../redux/hooks";
import { getProductsAll } from "../redux/products/productsSlice";

const Drinks = () => {
  const products = useAppSelector(getProductsAll);
  // const isLoading = useAppSelector(getIsLoading);
  const drinks = filterByCategory(products, "drinks");

  return (
    <PagesWrapper>
      {/* {isLoading && <LoaderModal />} */}
      <ProductsList data={drinks} />
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

export default Drinks;

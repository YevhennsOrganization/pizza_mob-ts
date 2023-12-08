import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getProductsAll } from "../redux/products/productsSlice";
import { useAppSelector } from "../redux/hooks";
import { filterByCategory } from "../helpers/filterByCategory";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";
import ProductsList from "../modules/Products/ProductsList";

const Appetizers = () => {
  const products = useAppSelector(getProductsAll);
  // const isLoading = useSelector(getIsLoading);
  const appetizers = filterByCategory(products, "appetizers");

  return (
    <PagesWrapper>
      {/* {isLoading && <LoaderModal />} */}
      <ProductsList data={appetizers} />
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

export default Appetizers;

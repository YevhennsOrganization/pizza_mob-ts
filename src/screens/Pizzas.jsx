import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ProductsList from "../modules/Products/ProductsList";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";
import { getIsLoading, getProductsAll } from "../redux/products/productsSlice";
import { filterByCategory } from "../helpers/filterByCategory";

const Pizzas = () => {
  const products = useSelector(getProductsAll);
  const isLoading = useSelector(getIsLoading);
  const pizzas = filterByCategory(products, "pizzas");

  return (
    // <View style={styles.wrapper}>
    //   <Text>Pizzas</Text>
    // </View>

    <PagesWrapper title="Nostra pizza - Піца">
      {/* {isLoading && <LoaderModal />} */}
      <ProductsList data={pizzas} />
      {/* <ToastContainer /> */}
    </PagesWrapper>
  );
};

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default Pizzas;

import React from "react";
import ProductsList from "../modules/Products/ProductsList";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";
import { getIsLoading, getProductsAll } from "../redux/products/productsSlice";
import { filterByCategory } from "../helpers/filterByCategory";
import { useAppSelector } from "../redux/hooks";
import Toast from "react-native-toast-message";

const Pizzas = () => {
  const products = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const pizzas = filterByCategory(products, "pizzas");

  return (
    <PagesWrapper>
      {/* {isLoading && <LoaderModal />} */}
      <ProductsList data={pizzas} />
      <Toast />
    </PagesWrapper>
  );
};

export default Pizzas;

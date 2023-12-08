import React from "react";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";
import ProductsList from "../modules/Products/ProductsList";
import { filterByCategory } from "../helpers/filterByCategory";
import { useAppSelector } from "../redux/hooks";
import { getIsLoading, getProductsAll } from "../redux/products/productsSlice";
import Toast from "react-native-toast-message";

const Drinks = () => {
  const products = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const drinks = filterByCategory(products, "drinks");

  return (
    <PagesWrapper>
      {/* {isLoading && <LoaderModal />} */}
      <ProductsList data={drinks} />
      <Toast />
    </PagesWrapper>
  );
};

export default Drinks;

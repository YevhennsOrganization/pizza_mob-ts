import React from "react";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";
import ProductsList from "../modules/Products/ProductsList";
import { filterByCategory } from "../helpers/filterByCategory";
import { useAppSelector } from "../redux/hooks";
import { getIsLoading, getProductsAll } from "../redux/products/productsSlice";
import Loader from "../UI/Loader/Loader";

const Drinks = () => {
  const products = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const drinks = filterByCategory(products, "drinks");

  return (
    <PagesWrapper>
      {isLoading && <Loader />}
      <ProductsList data={drinks} />
    </PagesWrapper>
  );
};

export default Drinks;

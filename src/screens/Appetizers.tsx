import React from "react";
import { getIsLoading, getProductsAll } from "../redux/products/productsSlice";
import { useAppSelector } from "../redux/hooks";
import { filterByCategory } from "../helpers/filterByCategory";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";
import ProductsList from "../modules/Products/ProductsList";
import Loader from "../UI/Loader/Loader";

const Appetizers = () => {
  const products = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const appetizers = filterByCategory(products, "appetizers");

  return (
    <PagesWrapper>
      {isLoading && <Loader />}
      <ProductsList data={appetizers} />
    </PagesWrapper>
  );
};

export default Appetizers;

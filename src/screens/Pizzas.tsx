import React from "react";
import ProductsList from "../modules/Products/ProductsList";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";
import { getIsLoading, getProductsAll } from "../redux/products/productsSlice";
import { filterByCategory } from "../helpers/filterByCategory";
import { useAppSelector } from "../redux/hooks";
import Loader from "../UI/Loader/Loader";

const Pizzas = () => {
  const products = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const pizzas = filterByCategory(products, "pizzas");

  return (
    <PagesWrapper>
      {isLoading && <Loader />}
      <ProductsList data={pizzas} />
    </PagesWrapper>
  );
};

export default Pizzas;

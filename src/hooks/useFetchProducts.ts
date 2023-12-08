import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getProducts } from "../redux/products/productsOperations";
import { getProductsAll, getError } from "../redux/products/productsSlice";

export const useFetchProducts = () => {
  const [is500Error, setIs500Error] = useState(false);

  const dispatch = useAppDispatch();
  const products = useAppSelector(getProductsAll);
  const error = useAppSelector(getError);

  useEffect(() => {
    if (products.length === 0 && !error) {
      dispatch(getProducts());
      return;
    }
    if (error) {
      setIs500Error(true);
    }
  }, [dispatch, error, is500Error, products.length]);
  return is500Error;
};

import React from "react";
import { useAppSelector } from "../redux/hooks";
import { getIsLoading, getPromotions } from "../redux/products/productsSlice";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";
import ProductsList from "../modules/Products/ProductsList";
import Toast from "react-native-toast-message";

const News = () => {
  const promotionProducts = useAppSelector(getPromotions);
  const isLoading = useAppSelector(getIsLoading);

  return (
    <PagesWrapper>
      {/* {isLoading && <LoaderModal />} */}
      {/* <CarouselComponent /> */}
      <ProductsList data={promotionProducts} />
      <Toast />
    </PagesWrapper>
  );
};

export default News;

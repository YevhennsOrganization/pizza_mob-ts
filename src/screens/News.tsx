import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../redux/hooks";
import { getPromotions } from "../redux/products/productsSlice";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";
import ProductsList from "../modules/Products/ProductsList";

const News = () => {
  const promotionProducts = useAppSelector(getPromotions);
  // const isLoading = useAppSelector(getIsLoading);

  return (
    <PagesWrapper>
      <Text>Новинки</Text>
      {/* {isLoading && <LoaderModal />} */}
      {/* <CarouselComponent /> */}
      {/* <h2 className={css.heading}>Найпопулярніші позиції</h2> */}
      <ProductsList data={promotionProducts} />
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

export default News;

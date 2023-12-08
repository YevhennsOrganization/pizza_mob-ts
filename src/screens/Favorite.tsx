import React from "react";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";
import { useAppSelector } from "../redux/hooks";
import { getFavorites, getIsLoading } from "../redux/products/productsSlice";
import ProductsList from "../modules/Products/ProductsList";
import Empty from "../components/Empty/Empty";
import Toast from "react-native-toast-message";

const Favorite = () => {
  const isLoading = useAppSelector(getIsLoading);
  const favoriteProducts = useAppSelector(getFavorites);

  return (
    <PagesWrapper>
      {/* {isLoading && <LoaderModal />} */}
      {favoriteProducts.length > 0 ? (
        <ProductsList data={favoriteProducts} />
      ) : (
        <Empty text={"Тут нічого немає!"} />
      )}
      <Toast />
    </PagesWrapper>
  );
};

export default Favorite;

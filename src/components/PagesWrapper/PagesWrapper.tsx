import React, { PropsWithChildren } from "react";
// import Container from "@/UI/common/Container/Container";
// import Section from "@/UI/common/Section/Section";
// import Error500 from "@/components/errors/Error500/Error500";
// import { useFetchProducts } from "@/hooks/useFetchProducts";
// import "react-toastify/dist/ReactToastify.css";
import { View } from "react-native";

type PagesWrapperProps = PropsWithChildren;

export const PagesWrapper = ({ children }: PagesWrapperProps) => {
  //   const is500Error = useFetchProducts();

  return (
    <View>
      {/* <Container>{is500Error ? <Error500 /> : <>{children}</>}</Container> */}
      {children}
    </View>
  );
};

export default PagesWrapper;

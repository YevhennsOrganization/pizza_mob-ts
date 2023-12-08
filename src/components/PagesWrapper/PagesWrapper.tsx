import React, { PropsWithChildren } from "react";
// import Container from "@/UI/common/Container/Container";
// import Section from "@/UI/common/Section/Section";
// import Error500 from "@/components/errors/Error500/Error500";
// import { useFetchProducts } from "@/hooks/useFetchProducts";
// import "react-toastify/dist/ReactToastify.css";
import { View, Text } from "react-native";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import Error500 from "../errors/Error500/Error500";

type PagesWrapperProps = PropsWithChildren;

export const PagesWrapper = ({ children }: PagesWrapperProps) => {
  const is500Error = useFetchProducts();

  return <View>{is500Error ? <Error500 /> : <>{children}</>}</View>;
};

export default PagesWrapper;

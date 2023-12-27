import React, { PropsWithChildren } from "react";
import { ScrollView } from "react-native";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import Error500 from "../errors/Error500/Error500";

type PagesWrapperProps = PropsWithChildren;

export const PagesWrapper = ({ children }: PagesWrapperProps) => {
  const is500Error = useFetchProducts();

  return <ScrollView>{is500Error ? <Error500 /> : <>{children}</>}</ScrollView>;
};

export default PagesWrapper;

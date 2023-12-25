import React from "react";
import { View, Text, Image } from "react-native";
import { ProductDescriptionCSS } from "./ProductDescription.styles";

interface ProductDescriptionProps {
  photo: string;
  title: string;
  description: string;
  dimension: string;
}

const ProductDescription = ({
  photo,
  title,
  description,
  dimension,
}: ProductDescriptionProps) => {
  return (
    <View style={ProductDescriptionCSS.descriprionWrapper}>
      <Image
        style={ProductDescriptionCSS.img}
        source={{ uri: photo }}
        width={200}
        height={200}
      />
      <View style={ProductDescriptionCSS.info}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{dimension}</Text>
      </View>
    </View>
  );
};

export default ProductDescription;

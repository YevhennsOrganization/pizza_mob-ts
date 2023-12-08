import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

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

const ProductDescriptionCSS = StyleSheet.create({
  descriprionWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    // h2 {
    //     font-family: var(--main-font);
    //     font-size: 18px;
    // }
    // p {
    //     font-family: var(--secondary-font);
    //     color: var(--secondary-text-color);
    // }
  },
  img: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default ProductDescription;

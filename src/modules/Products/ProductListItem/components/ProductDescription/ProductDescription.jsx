import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ProductDescription = ({ photo, title, description, dimension }) => {
  return (
    <View style={css.descriprionWrapper}>
      <Image source={photo} width={200} height={200} />
      <View style={css.info}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{dimension}</Text>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  descriprionWrapper: {
    display: flex,
    flexDirection: column,
    gap: 10,
    // img {
    //     margin-left: auto;
    //     margin-right: auto;
    // }
    info: {
      display: flex,
      flexDirection: column,
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
  },
});

export default ProductDescription;

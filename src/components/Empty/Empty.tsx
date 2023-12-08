import React, { FC } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

interface Props {
  text: string;
}

const Empty: FC<Props> = ({ text }) => {
  return (
    <View style={emptyCSS.emptyCart}>
      <Image
        source={require("../../../assets/empty.png")}
        alt="empty"
        width={236}
        height={257}
      />
      <Text>{text}</Text>
    </View>
  );
};

const emptyCSS = StyleSheet.create({
  emptyCart: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default Empty;

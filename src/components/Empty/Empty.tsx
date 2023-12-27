import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import { emptyCSS } from "./Empty.styles";

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

export default Empty;

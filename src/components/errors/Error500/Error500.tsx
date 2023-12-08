import React from "react";
import { View, Text } from "react-native";

const Error500 = () => {
  return (
    <View>
      <View>
        <Text>Щось пішло не так!</Text>
        <Text>Перезавантажте сторінку,</Text>
        <Text>або завітайте пізніше</Text>
      </View>
    </View>
  );
};

export default Error500;

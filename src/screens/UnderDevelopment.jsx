import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UnderDevelopment = () => {
  return (
    <View style={styles.wrapper}>
      <Text>UnderDevelopment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UnderDevelopment;

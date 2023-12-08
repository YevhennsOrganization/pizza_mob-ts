import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Drinks = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Drinks</Text>
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

export default Drinks;

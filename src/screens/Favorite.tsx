import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Favorite = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Favorite</Text>
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

export default Favorite;

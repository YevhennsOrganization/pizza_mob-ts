import React from "react";
import { StyleSheet, Text, View } from "react-native";

const News = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Main</Text>
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

export default News;

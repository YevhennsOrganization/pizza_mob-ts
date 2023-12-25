import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./src/components/navigation/BottomNavigation";
import { Provider } from "react-redux";
import { persist, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>loading</Text>} persistor={persist}>
        <NavigationContainer>
          <BottomNavigation />
          <Toast />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

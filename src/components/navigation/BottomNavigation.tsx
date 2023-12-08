import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import Cart from "../../screens/Cart";
import UnderDevelopment from "../../screens/UnderDevelopment";
import Favorite from "../../screens/Favorite";
import News from "../../screens/News";
import TopNavigation from "./TopNavigation";
import Toast from "react-native-toast-message";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: "#de612b" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="news" size={32} color={color} />
            ),
          }}
          name="Новинки"
          component={News}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-o" size={32} color={color} />
            ),
          }}
          name="Увійти"
          component={UnderDevelopment}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="pizza-outline" size={32} color={color} />
            ),
          }}
          name="Категорії"
          component={TopNavigation}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="hearto" size={32} color={color} />
            ),
          }}
          name="Улюблене"
          component={Favorite}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="basket-outline"
                size={32}
                color={color}
              />
            ),
          }}
          name="Кошик"
          component={Cart}
        />
      </Tab.Navigator>
      <Toast />
    </>
  );
};

export default BottomNavigation;

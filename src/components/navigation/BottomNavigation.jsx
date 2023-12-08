import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import Home from "../../screens/Home";
import Cart from "../../screens/Cart";
import UnderDevelopment from "../../screens/UnderDevelopment";
import Favorite from "../../screens/Favorite";
import News from "../../screens/News";
import TopNavigation from "./TopNavigation";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarShowLabel: false,
        style: { color: "red" },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="news" size={24} color="black" />,
        }}
        name="Новинки"
        component={News}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="user-o" size={24} color="black" />
          ),
        }}
        name="Увійти"
        component={UnderDevelopment}
      />

      <Tab.Screen
        options={{
          // headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="pizza-outline" size={24} color="black" />
          ),
        }}
        name="Категорії"
        component={TopNavigation}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <AntDesign name="hearto" size={24} color="black" />,
        }}
        name="Улюблене"
        component={Favorite}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="basket-outline"
              size={24}
              color="black"
            />
          ),
        }}
        name="Кошик"
        component={Cart}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

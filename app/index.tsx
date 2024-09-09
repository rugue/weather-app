import { Text, View } from "react-native";
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import "react-native-gesture-handler";

export default function Index() {
  return <HomeScreen />;
}

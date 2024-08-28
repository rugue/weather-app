import { Text, View } from "react-native";
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import "react-native-gesture-handler";
import { Stack } from "expo-router";

export default function Index() {
  return (
    // <Stack>
    //   <Stack.Screen
    //     name="index"
    //     component={HomeScreen}
    //     options={{ title: "Weather App" }}
    //   />
    //   <Stack.Screen
    //     name="details"
    //     component={DetailsScreen}
    //     options={{ title: "Weather Details" }}
    //   />
    // </Stack>
    <HomeScreen />
  );
}

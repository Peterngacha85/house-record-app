import * as React from "react";
import { StatusBar } from "expo-status-bar";
import DrawerNav from "./components/Navigation/drawer"; // Adjust the path accordingly
// import { NavigationContainer } from '@react-navigation/native';
import { globalStyles } from "./components/common/globalStyles";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Houses from "./components/Navigation/houseStack";

export default function App() {
  return (
    <NavigationContainer>
      <Houses />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

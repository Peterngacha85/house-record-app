import React, { useState } from "react";
import { Text, View, Button, TextInput, InputLabel, Alert, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Import icons from a suitable library
import { globalStyles } from "../common/globalStyles";
// import { red } from "react-native-reanimated";

const Tab = createBottomTabNavigator();


const WaterScreen = () => {
  const [prevBill, setPrevBill] = useState("");
  const [currentBill, setCurrentBill] = useState("");
  const [cost, setCost] = useState("");
  const [rooms, setRooms] = useState("");

  const handleAlert = () => {
    const numericPrevBill = parseFloat(prevBill);
    const numericCurrentBill = parseFloat(currentBill);
    const numericCost = parseFloat(cost);

    if (
      isNaN(numericPrevBill) ||
      isNaN(numericCurrentBill) ||
      isNaN(numericCost) || 
      currentBill < prevBill 
    ) {
      Alert.alert("Error", `Please enter valid numeric values. previous meter readings should be less than the current readings`);
      setCurrentBill(""),
        setPrevBill(""),
        setRooms(""),
        setPrevBill(""),
        setCost("");
      return;
    }
    let totalBill = ((numericCurrentBill - numericPrevBill) * numericCost)/ rooms;
         totalBill = totalBill.toFixed(2)
    return (
      Alert.alert("Amount ", `Each house has to pay: ${totalBill} Ksh`, [
        {
          text: "cancel",
          onPress: () => console.log("alert cancel button pressed"),
        },
        {
          text: "ok",
          onPress: () => console.log("ok btn pressed"),
        },
      ]),
      setCurrentBill(""),
      setPrevBill(""),
      setRooms(""),
      setPrevBill(""),
      setCost("")
    );
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mainText}>Water Bill</Text>
      <View style={globalStyles.input}>
        <Text style={globalStyles.billText}>Previous Meter Reading: </Text>
        <TextInput
          value={prevBill}
          onChangeText={(text) => setPrevBill(text)}
          keyboardType="numeric"
          style={[{ fontSize: 20, color: "coral"  }]}
          placeholder="eg. 2839"
        />
      </View>
      <View style={globalStyles.input}>
        <Text style={globalStyles.billText}>Current Meter Reading: </Text>
        <TextInput
          value={currentBill}
          onChangeText={(text) => setCurrentBill(text)}
          keyboardType="numeric"
          style={[{ fontSize: 20, color: "coral" }]}
          placeholder="eg. 7983"
        />
      </View>
      <View style={globalStyles.input}>
        <Text style={globalStyles.billText}>Amount per Cubic meter:</Text>
        <TextInput
          value={cost}
          onChangeText={(text) => setCost(text)}
          keyboardType="numeric"
          style={[{ fontSize: 20, color: "coral" }]}
          placeholder="eg. 100"
        />
      </View>
      <View style={globalStyles.input}>
        <Text style={globalStyles.billText}>Number of rooms:</Text>
        <TextInput
          value={rooms}
          onChangeText={(text) => setRooms(text)}
          keyboardType="numeric"
          style={[{ fontSize: 20, color: "coral" }]}
          placeholder="eg. 10"
        />
      </View>
      <View style={globalStyles.typeOfBill}>
        <Button title="next" onPress={() => handleAlert()} />
      </View>
    </View>
  );
};

const SecurityScreen = () => (
  <View style={globalStyles.container}>
    <Text style={globalStyles.mainText}>Security Bill</Text>
  </View>
);

const GarbageScreen = () => (
  <View style={globalStyles.container}>
    <Text style={globalStyles.mainText}>Garbage Bill</Text>
  </View>
);

const HomeScreen = ({ navigation }) => (
  <View style={globalStyles.container}>
    <Text style={globalStyles.mainText}>Home</Text>
    <Button title="Go to Bills" onPress={() => navigation.navigate("Home")} />
  </View>
);

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Water"
        component={WaterScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "water" : "water-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Security"
        component={SecurityScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "shield" : "shield-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Garbage"
        component={GarbageScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "trash" : "trash-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

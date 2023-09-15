// import { Button } from "bootstrap";
import React from "react";
import { Text, View,Button } from "react-native";
import { globalStyles } from "../common/globalStyles";

export default  HomeScreen = ({navigation}) => {
    console.log("Home");
    return (
        <View style={globalStyles.mainView}>
          <Text style={globalStyles.mainText}> XYZ APARTMENT RECORD</Text>
          <View style={globalStyles.btnAllHouses} >
            <Button title="all houses" 
            onPress={() => navigation.navigate('XYZ Houses')}
            />
          </View>
          <View style={globalStyles.typeOfBill}>
            <Button title="type of bills" 
            onPress={()=> {navigation.navigate('Billings')}}
            />
          </View>
        </View>
      );
}
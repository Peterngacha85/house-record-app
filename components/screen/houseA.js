import * as React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../common/globalStyles";

export default HouseA = ({ navigation, route }) => {
  console.log("HouseA");
//   const { roomKey } = route.params;
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const formatedDate = `${day}/${month}/${year}`;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.billTitle}>BILLS for {route.params.room}</Text>
      <Text style={globalStyles.billText}>
        Water: <Text style={globalStyles.spanText}>paid</Text>.
      </Text>
      <Text style={globalStyles.billText}>
        Security Electricity: <Text style={globalStyles.spanText}>paid</Text>.
      </Text>
      <Text style={globalStyles.billText}>
        Garbage Fee: <Text style={globalStyles.spanText}>paid</Text>.
      </Text>
      <Text style={globalStyles.billText}>
        Date of Payment:{" "}
        <Text style={globalStyles.dateOfPayment}>{formatedDate}</Text>.
      </Text>
      <Text style={globalStyles.billText}>
        Current Date : <Text style={globalStyles.spanText}>{formatedDate}</Text>
        .
      </Text>

      <View>
        <Button
          title="go to HOME"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

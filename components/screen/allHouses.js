import React, { useState } from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../common/globalStyles";

export default AllHouses = ({ navigation }) => {
  console.log("all houses");

  const [house, setHouse] = useState([
    { room: "ROOM A", key: "0" },
    { room: "ROOM B", key: "1" },
    { room: "ROOM C", key: "2" },
    { room: "ROOM D", key: "3" },
    { room: "ROOM E", key: "4" },
    { room: "ROOM F", key: "5" },
    { room: "ROOM G", key: "6" },
    { room: "ROOM H", key: "7" },
  ]);

  const navigateToRoom = (roomKey, roomName) => {
    switch (roomKey) {
      case "0":
        navigation.navigate("RoomA", { room: roomName });
        break;
      case "1":
        navigation.navigate("RoomB", { room: roomName });
        break;
      case "2":
        navigation.navigate("RoomC", { room: roomName });
        break;
      case "3":
        navigation.navigate("RoomD", { room: roomName });
        break;
      case "4":
        navigation.navigate("RoomE", { room: roomName });
        break;
      case "5":
        navigation.navigate("RoomF", { room: roomName });
        break;
      case "6":
        navigation.navigate("RoomG", { room: roomName });
        break;
      case "7":
        console.log("error");
        navigation.navigate("Test");
        break;
      default:
        navigation.navigate("Home");
    }
  };

  // Custom renderItem function to render two rooms per row
  const renderRoomItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToRoom(item.key, item.room)}>
      <View style={globalStyles.houseIcon}>
        <Text>{item.room}</Text>
      </View>
    </TouchableOpacity>
  );

  // Render two rooms per row using flexDirection: 'row'
  const renderTwoRoomsPerRow = ({ item, index }) => {
    if (index % 2 === 0) {
      // Render a row with two rooms
      return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {renderRoomItem({ item: house[index] })}
          {index + 1 < house.length && renderRoomItem({ item: house[index + 1] })}
        </View>
      );
    }
  };

  return (
    <View style={globalStyles.renderedHouses}>
      <Text style={globalStyles.mainText2}> XYZ ROOMS</Text>

      <FlatList
        data={house}
        renderItem={renderTwoRoomsPerRow} // Use the custom renderItem function
        keyExtractor={(item) => item.key} // Add keyExtractor
      />
      <Button  title="HOME" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

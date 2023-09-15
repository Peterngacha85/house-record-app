import * as React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../common/globalStyles";


export default TestDequeue = ({navigation}) => {
    console.log('this is the test screen...')

    return(
        <View style={globalStyles.container}>
            <Text>Test Dequeuing</Text>
            <Button 
            title="go to room"
            onPress={()=> navigation.navigate('RoomG')}
            />
        </View>
    )
}
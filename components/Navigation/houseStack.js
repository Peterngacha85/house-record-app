import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import allHouses from '../screen/allHouses';
import home from '../screen/home';
import typesOfBills from '../screen/typesOfBills';
import houseA from '../screen/houseA';
import houseB from '../screen/houseB';
import houseC from '../screen/house_C';
import houseD from '../screen/houseD';
import houseE from '../screen/houseE';
import houseF from '../screen/houseF';
import houseG from '../screen/houseG';
import houseH from '../screen/houseH';
import TestDequeue from '../screen/testScreen';

const Stack = createStackNavigator();

export default Houses = () => {
    console.log('Stack for all houses');

    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={home} />
            <Stack.Screen name='XYZ Houses' component={allHouses}/>
            <Stack.Screen name='Billings' component={typesOfBills}/>
            <Stack.Screen name='RoomA' component={houseA}/>
            <Stack.Screen name='RoomB' component={houseB}/>
            <Stack.Screen name='RoomC' component={houseC}/>
            <Stack.Screen name='RoomD' component={houseD}/>
            <Stack.Screen name='RoomE' component={houseE}/>
            <Stack.Screen name='RoomF' component={houseF}/>
            <Stack.Screen name='RoomG' component={houseG}/>
            <Stack.Screen name='RoomH' component={houseH}/>
            <Stack.Screen name='Test' component={TestDequeue} />
        </Stack.Navigator>
    )
}


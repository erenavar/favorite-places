
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavouritesList from '../screens/FavouritesList';
import MapScreen from '../screens/MapScreen';
import { Button } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();


const MainNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
            >
                <Stack.Screen name='Favourites' component={FavouritesList} />
                <Stack.Screen
                    name='Map'
                    component={MapScreen}
                    options={{
                        headerBackTitleVisible: false
                    }}

                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;


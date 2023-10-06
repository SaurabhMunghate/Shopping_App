import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'


import Demo from './hotel/Demo';
import Demo1 from './hotel/Demo1.js';

import Hotels from './hotel/Hotels';
import LoginPage from './hotel/LoginPage';
import Explore from './hotel/Explore';
import Wishlist from './hotel/Wishlist';
import Card from './hotel/Card';

const Stack = createStackNavigator();

const Shop = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Hotels">
                <Stack.Screen name="Hotels" component={Hotels} options={{ headerShown: false }}/>
                <Stack.Screen name="LoginPage" component={LoginPage}/>
                <Stack.Screen name="Explore" component={Explore}/>
                <Stack.Screen name="Wishlist" component={Wishlist}/>
                
                <Stack.Screen name="Demo" component={Demo}/>
                <Stack.Screen name="Demo1" component={Demo1}/>
                <Stack.Screen name="Card" component={Card}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Shop

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './shop/LoginScreen';
import Cart from './shop/Cart';
import User from './shop/User';
import Home from './shop/Home';
import Sign_In from './shop/Sign_In';
import Sign_Up from './shop/Sign_Up';

import ShoppingHome from './shop/ShoppingHome';
import { Provider } from 'react-redux';

import store from './redux/store';


const Stack = createStackNavigator();

const Shop = () => {
    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ShoppingHome">
                <Stack.Screen name="ShoppingHome" component={ShoppingHome} options={{ headerShown: false }}/>
                <Stack.Screen name="Cart" component={Cart}/>
                <Stack.Screen name="User" component={User}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="SignIn" component={Sign_In}/>
                <Stack.Screen name="SignUp" component={Sign_Up}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>

    )
}

export default Shop

const styles = StyleSheet.create({})
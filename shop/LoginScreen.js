import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'


const LoginScreen = ({navigation}) => {

  const Cart = () => { navigation.navigate('Cart'); };

  return (
    <SafeAreaView style={{flex:1}}>
      <Text>LoginScreen1</Text>
      <Text>LoginScreen2</Text>
      <Text>LoginScreen3</Text>
      <TouchableOpacity style={{}} onPress={Cart}>
          <Text style={{}}>History</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
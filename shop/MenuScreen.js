import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      {/* Add more menu items */}
    </View>
  );
};

export default MenuScreen;

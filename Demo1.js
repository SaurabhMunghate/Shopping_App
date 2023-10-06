import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <MenuScreen {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* Add more screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, Animated, SafeAreaView } from 'react-native';

const Demo2 = () => {


    // const toggleMenu = () => {

    // }
    const Events = () => {

    }
const TimeLine =() =>{

}
  const [isOpen, setIsOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-300)).current;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    Animated.timing(slideAnim, {
      toValue: isOpen ? -300 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <Text>Demo2</Text>

      {/* Animated */}
      <Animated.View style={[styles.menu, { left: slideAnim }]}>
        <TouchableOpacity onPress={toggleMenu} style={styles.hamburger}>
          <Text style={styles.hamburgerText}>{isOpen ? 'X' : '☰'}</Text>
        </TouchableOpacity>

        <View>
          {/* <Text>Helllo</Text> */}
        </View>
        <View style={{ height: 200, justifyContent: 'flex-end', margin: 20 }}>
          <Image source={{ uri: 'https://www.shutterstock.com/image-photo/male-security-guard-using-portable-260nw-782064622.jpg', }} style={{ width: 260, height: 200, bottom: 1, zIndex: 10 }} />
          <Text>Guard</Text>
          <Text>ID : demo</Text>
        </View>
        <TouchableOpacity style={styles.menuItem} onPress={Events}>
          <Text style={styles.menuItemText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={Events}>.....
          <Text style={styles.menuItemText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={Events}>
          <Text style={styles.menuItemText}>Checkpoint Assignment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={Events}>
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={Events}>
          <Text style={styles.menuItemText}>User Guide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={Events}>
          <Text style={styles.menuItemText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={Events}>
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>


      {/* Header = HamburgerMenu, QLD QR-Patrol, TimeLine*/}
      <View style={{}} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={toggleMenu} style={{}}>
            <Text style={{}} >{isOpen ? 'X' : '☰'}</Text>
          </TouchableOpacity>
          <View>
            <Text style={{}}>QLD QR-Patrol</Text>
          </View>
          <View >
            <Text style={{}} onPress={TimeLine} >TimeLine</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Demo2

const styles = StyleSheet.create({
    menuItem:{

    },
    menuItemText:{

    },
    menu:{
position: 'absolute'
    }, 
    hamburgerText:{

    },
    hamburger:{

    }
})
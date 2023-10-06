import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image, Animated } from 'react-native';


const Main = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

    const Scan = () => { navigation.navigate('Scan'); };
  const Multimedia = () => { navigation.navigate('Multimedia'); };
  const Incident = () => { navigation.navigate('Incident'); };
  const Test = () => { navigation.navigate('Test'); };
  const TimeLine = () => { navigation.navigate('TimeLine'); };

  const Events = () => { console.log("Events"); navigation.navigate('Events'); };
  const History = () => { navigation.navigate('History'); };
  const CheckpointAssignment = () => { navigation.navigate('CheckpointAssignment'); };
  const Settings = () => { navigation.navigate('Settings'); };
  const UserGuide = () => { navigation.navigate('UserGuide'); };
  const About = () => { navigation.navigate('About'); };
  const LoginScreen = () => { navigation.navigate('About'); };
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

const renderProductItem = ({ item }) => (
  <View style={styles.productItem}>
    <Text style={styles.productTitle}>{item.title}</Text>
    <Text style={styles.productPrice}>$ {item.price}</Text>
    <Image style={styles.productImage} source={{ uri: item.image }} />
  </View>
);

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
    <View style={styles.container}>

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
        <TouchableOpacity style={styles.menuItem} onPress={History}>
          <Text style={styles.menuItemText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={CheckpointAssignment}>
          <Text style={styles.menuItemText}>Checkpoint Assignment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={Settings}>
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={UserGuide}>
          <Text style={styles.menuItemText}>User Guide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={About}>
          <Text style={styles.menuItemText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={LoginScreen}>
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>


          <TouchableOpacity onPress={toggleMenu} style={{}}>
            <Text style={styles.headtitleAnim} >{isOpen ? 'X' : '☰'}</Text>
          </TouchableOpacity>
      {/* Header */}
      <View style={styles.header}>
        {/* Hamburg Menu */}
        <TouchableOpacity style={styles.menuIcon}>
          {/* Your menu icon here */}
        </TouchableOpacity>
        {/* Search Box */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search products"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Your E-commerce App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'rgb(133, 51, 255)',
  },
  menuIcon: {
    padding: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginLeft: 10,
  },
  productItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  footer: {
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'rgb(133, 51, 255)',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },
  productImage: {
  width: 100,
  height: 100,
  resizeMode: 'cover',
  borderRadius: 5,
},




  menuItem: {
    marginVertical: 10,
    left: 10,
    marginLeft: 10,
    padding: 5,
    
  },
  menuItemText: {
    fontSize: 20,
    borderBottomWidth: 1,
  },

});

export default Main;

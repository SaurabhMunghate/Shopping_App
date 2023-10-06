import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const Hotels = () => {
  const [searchText, setSearchText] = useState('');
  const [hoteldata, setHotelData] = useState([]);

  const fetchUnsplashData = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: {
          count: 10,
          client_id: '3Jm5L3kd9_L27x6tqWsXWI-qTHmAKBdLpyNXkM1qANc', // Replace with your Unsplash API key
          query: 'hotel',
        },
      });
      setHotelData(response.data);
    } catch (error) {
      console.error('Error fetching Unsplash data:', error);
    }
  };

  useEffect(() => {
    fetchUnsplashData();
  }, []);

  const handlePress = () => {
    console.log('handlePress');
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item.category}</Text>
    </View>
  );

  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.urls.regular }} style={styles.image} />
      <Text>Price: ₹{Math.floor(Math.random() * 500) + 1000}</Text>
      <Text>Date: 4-9 Sep</Text>
      <Text>Day/Night: {Math.random() > 0.5 ? 'Day' : 'Night'}</Text>
      <Text>Location: Lonavla, India</Text>
      <Text>63 kilometres away</Text>
      <Text>Details: This is a fantastic hotel...</Text>
    </View>
  );

  const mobilePhones = [
    // ... your mobilePhones data
  ];

  const category = [
    // ... your category data
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
        <FlatList
          data={category}
          renderItem={renderProductItem}
          keyExtractor={item => item.id.toString()}
          horizontal
        />
      </View>

      <FlatList
        data={hoteldata}
        renderItem={renderImageItem}
        keyExtractor={item => item.id}
      />

      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Icon name="search" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Icon name="heart" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Icon name="home" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#8B008B',
  },
  categoryItem: {
    height: 50,
    width: 100,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: 'white',
  },
  categoryText: {},
  imageContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
  footerContainer: {
    height: 50,
    backgroundColor: '#8B008B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
});

export default Hotels;

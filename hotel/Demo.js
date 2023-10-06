import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const UnsplashData = () => {
  const [data, setData] = useState([]);

  const fetchUnsplashData = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: {
          count: 10, // Number of random images
          client_id: '3Jm5L3kd9_L27x6tqWsXWI-qTHmAKBdLpyNXkM1qANc', // Replace with your Unsplash API key
          query: 'hotel', // Add relevant search terms
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching Unsplash data:', error);
    }
  };

  useEffect(() => {
    fetchUnsplashData();
  }, []);

  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.urls.regular }} style={styles.image} />
      <Text>Price: ₹{Math.floor(Math.random() * 500) + 1000}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Day/Night: {Math.random() > 0.5 ? 'Day' : 'Night'}</Text>
      <Text>Location: {item.location.name}</Text>
      <Text>{Math.floor(Math.random() * 50)} kilometres away</Text>
      <Text>Details: This is a fantastic hotel...</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderImageItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default UnsplashData;

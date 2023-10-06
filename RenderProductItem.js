import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';


const Main = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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


  return (
    <View style={styles.container}>
      
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

});

export default Main;

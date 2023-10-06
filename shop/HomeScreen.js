import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ProductDetailScreen = ({ navigation }) => {
  const handleAddToCart = () => {
    // Perform actions for adding to cart

    // Navigate to the HomeScreen
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Product details */}
      <Text>Product Details</Text>

      {/* "Add to Cart" button */}
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailScreen;

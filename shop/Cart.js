import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
// import React from 'react'

import React, { useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';



// const Cart = () => {
//   return (
//     <View>
//       <Text>Cart</Text>
//     </View>
//   )
// }

// export default Cart

// const styles = StyleSheet.create({})
const categoriesData_1 = [
  {
    "id": 1,
    "category": "Electronics",
    "image": "https://source.unsplash.com/300x300/?electronics",
    "price": "$299.99",
    "detail": "Cutting-edge electronics for your modern lifestyle."
  },
  {
    "id": 2,
    "category": "Fashion Accessories",
    "image": "https://source.unsplash.com/300x300/?fashion",
    "price": "$19.99",
    "detail": "Stylish accessories to enhance your fashion statement."
  },
  {
    "id": 3,
    "category": "Home Appliances",
    "image": "https://source.unsplash.com/300x300/?appliances",
    "price": "$149.99",
    "detail": "High-quality appliances for your home."
  },
  {
    "id": 4,
    "category": "Jewelry",
    "image": "https://source.unsplash.com/300x300/?jewelry",
    "price": "$99.99",
    "detail": "Elegant jewelry pieces to adorn yourself."
  },
  {
    "id": 5,
    "category": "Books",
    "image": "https://source.unsplash.com/300x300/?books",
    "price": "$12.99",
    "detail": "Books to enrich your knowledge and imagination."
  },
  {
    "id": 6,
    "category": "Sports Gear",
    "image": "https://source.unsplash.com/300x300/?sports",
    "price": "$44.99",
    "detail": "Sports gear for your active and healthy lifestyle."
  },
  {
    "id": 7,
    "category": "Beauty Products",
    "image": "https://source.unsplash.com/300x300/?beauty",
    "price": "$29.99",
    "detail": "Beauty products for your skincare and makeup routine."
  },
  {
    "id": 8,
    "category": "Toys and Games",
    "image": "https://source.unsplash.com/300x300/?toys",
    "price": "$39.99",
    "detail": "Fun toys and games for all ages to enjoy."
  },
  {
    "id": 9,
    "category": "Groceries",
    "image": "https://source.unsplash.com/300x300/?groceries",
    "price": "$34.99",
    "detail": "Fresh and essential groceries for your kitchen."
  },
  {
    "id": 10,
    "category": "Health and Fitness",
    "image": "https://source.unsplash.com/300x300/?fitness",
    "price": "$24.99",
    "detail": "Fitness products to support your well-being."
  }
]


const CartPage = ({ cartItems }) => {

  useEffect(() => {
    //Runs only on the first render
    console.log("cartItems", cartItems);
  }, []);

  const allRenderItem = ({ item }) => {
    <View style={{ borderWidth: 0.4, padding: 5, margin: 5 }}>

      <View style={{ flexDirection: 'row' }}>
        <Image style={{
          width: 100, height: 100,
          resizeMode: 'cover', borderRadius: 5, margin: 10
        }}
          source={{ uri: item.image }} />
        <Text style={{ margin: 10, overflow: 'hidden', width: 100, fontSize: 12 }} numberOfLines={5} ellipsizeMode="tail">
          {item.description}
        </Text>
        <Text style={{ marginTop: 10 }}>
          $ {item.price}
        </Text>
      </View>

      <View>
        <Text>{item.id}</Text>
      </View>

    </View>
  }
  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.title}>Cart Items:</Text>

  //     <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  //       <Text style={{ marginLeft: 30 }}>PRODUCT</Text>
  //       <Text style={{ marginRight: 30 }}>TOTAL</Text>
  //     </View>

  //     <View style={styles.cartItemsContainer}>

  //       <FlatList
  //         data={cartItems}
  //         renderItem={allRenderItem}
  //         keyExtractor={item => item.id.toString()}
  //         // horizontal={true} // Set horizontal scrolling
  //       />

  //       {/* {cartItems.map((item, index) => (
  //         <View style={{borderWidth:0.4, padding: 5, margin: 5}}>

  //           <View style={{ flexDirection: 'row' }}>
  //             <Image style={{
  //               width: 100, height: 100,
  //               resizeMode: 'cover', borderRadius: 5,margin:10
  //             }}
  //               source={{ uri: item.image }} />
  //             <Text style={{margin: 10, overflow: 'hidden',width: 100, fontSize: 12}} numberOfLines={5} ellipsizeMode="tail">
  //               {item.description}
  //             </Text>
  //             <Text style={{marginTop:10}}>
  //               $ {item.price}
  //             </Text>
  //           </View>

  //           <View>
  //             <Text>{item.id}</Text>
  //           </View>

  //         </View>
  //       ))} */}
  //     </View>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
      }}>Cart Items:</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
        <Text>PRODUCT</Text>
        <Text>TOTAL</Text>
      </View>

      <View style={{}}>
        <FlatList
          data={cartItems}


          renderItem={({ item }) => (

            <View style={{
              marginBottom: 10, borderColor: '#ccc', backgroundColor: '#ebedf0',
              padding: 5, borderRadius: 20, borderWidth: 1,
            }}>
              <View style={styles.cartItemContainer}>
                <Image
                  style={styles.productImage}
                  source={{ uri: item.image }}
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productDescription} numberOfLines={5}>
                    {item.description}
                  </Text>
                </View>
                <Text style={styles.productTotal}> {item.price}</Text>
              </View>
              <View>
                <Text>  - 1 +  (Delete)</Text>
              </View>
            </View>

          )}


          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
        />
      </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
          <Text>Subtotal</Text>
          <Text>$ 00.00</Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
          <Text>Tax included and shipping calculated at checkout</Text>
        </View>

        <View style={{
          flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TouchableOpacity style={{
            height: 30, width: '60%', backgroundColor: 'red',
            justifyContent: 'center', alignItems: 'center',
            borderRadius: 5
          }}>
            <Text>Checkout</Text>
          </TouchableOpacity>
        </View>


    </View>
  );


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItemContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 10,
    padding: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  productInfo: {
    flex: 1,
    marginHorizontal: 10,
  },
  productDescription: {
    fontSize: 12,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productTotal: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems, // Assuming you've named your cart reducer 'cart'
  };
};

export default connect(mapStateToProps)(CartPage);

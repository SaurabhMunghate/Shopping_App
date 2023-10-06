import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, Image, TextInput, FlatList, TouchableOpacity, Dimensions, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icons from FontAwesome
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions'
// import Home from './screens/Cart';

const ShoppingHome = ({ navigation, item, addToCart }) => {

    const handleCartPress = () => { navigation.navigate('Cart'); }
    const handleUserPress = () => { navigation.navigate('User'); }
    const handleHomePress = () => { navigation.navigate('Home'); }
    const handleRefreshPress = () => { console.log("refreshing page") }
    const handleBarsPress = () => { navigation.navigate('SignIn'); }

    const handleAddToCart = (item) => {
        console.log('Item added to cart:', item);
        addToCart(item);
    }

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activePage, setActivePage] = useState(0);

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


    const profiles = [

    ];

    const Events = () => {

    }
    const TimeLine = () => {

    }
    const [isOpen, setIsOpen] = useState(false);
    const slideAnim = useRef(new Animated.Value(-300)).current;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        Animated.timing(slideAnim, {
            toValue: isOpen ? -300 : 0,
            duration: 900,
            useNativeDriver: false,
        }).start();
    };

    const categoriesData = [
        {

            "category": "Fruits",
            "image": "https://source.unsplash.com/300x300/?fruits"
        },
        {
            "category": "Vegetables",
            "image": "https://source.unsplash.com/300x300/?vegetables"
        },
        {
            "category": "Dairy Products",
            "image": "https://source.unsplash.com/300x300/?dairy"
        },
        {
            "category": "Bakery",
            "image": "https://source.unsplash.com/300x300/?bakery"
        },
        {
            "category": "Frozen Foods",
            "image": "https://source.unsplash.com/300x300/?frozen"
        },
        {
            "category": "Meat and Poultry",
            "image": "https://source.unsplash.com/300x300/?meat"
        },
        {
            "category": "Seafood",
            "image": "https://source.unsplash.com/300x300/?seafood"
        },
        {
            "category": "Personal Care",
            "image": "https://source.unsplash.com/300x300/?personalcare"
        },
        {
            "category": "Cleaning Supplies",
            "image": "https://source.unsplash.com/300x300/?cleaningsupplies"
        },
        {
            "category": "Home Appliances",
            "image": "https://source.unsplash.com/300x300/?appliances"
        }
    ]

    const categoriesData_1 = [
        {
            "id": 1,
            "category": "Electronics",
            "image": "https://source.unsplash.com/300x300/?electronics",
            "price": "$299.99",
            "description": "Cutting-edge electronics for your modern lifestyle."
        },
        {
            "id": 2,
            "category": "Fashion Accessories",
            "image": "https://source.unsplash.com/300x300/?fashion",
            "price": "$19.99",
            "description": "Stylish accessories to enhance your fashion statement."
        },
        {
            "id": 3,
            "category": "Home Appliances",
            "image": "https://source.unsplash.com/300x300/?appliances",
            "price": "$149.99",
            "description": "High-quality appliances for your home."
        },
        {
            "id": 4,
            "category": "Jewelry",
            "image": "https://source.unsplash.com/300x300/?jewelry",
            "price": "$99.99",
            "description": "Elegant jewelry pieces to adorn yourself."
        },
        {
            "id": 5,
            "category": "Books",
            "image": "https://source.unsplash.com/300x300/?books",
            "price": "$12.99",
            "description": "Books to enrich your knowledge and imagination."
        },
        {
            "id": 6,
            "category": "Sports Gear",
            "image": "https://source.unsplash.com/300x300/?sports",
            "price": "$44.99",
            "description": "Sports gear for your active and healthy lifestyle."
        },
        {
            "id": 7,
            "category": "Beauty Products",
            "image": "https://source.unsplash.com/300x300/?beauty",
            "price": "$29.99",
            "description": "Beauty products for your skincare and makeup routine."
        },
        {
            "id": 8,
            "category": "Toys and Games",
            "image": "https://source.unsplash.com/300x300/?toys",
            "price": "$39.99",
            "description": "Fun toys and games for all ages to enjoy."
        },
        {
            "id": 9,
            "category": "Groceries",
            "image": "https://source.unsplash.com/300x300/?groceries",
            "price": "$34.99",
            "description": "Fresh and essential groceries for your kitchen."
        },
        {
            "id": 10,
            "category": "Health and Fitness",
            "image": "https://source.unsplash.com/300x300/?fitness",
            "price": "$24.99",
            "description": "Fitness products to support your well-being."
        }
    ]



    const categoriesData_2 = [
        {
            "id": 1,
            "category": "Clothing",
            "image": "https://source.unsplash.com/300x300/?clothing",
            "price": "$49.99",
            "description": "Trendy clothing options for all occasions."
        },
        {
            "id": 2,
            "category": "Shoes",
            "image": "https://source.unsplash.com/300x300/?shoes",
            "price": "$89.99",
            "description": "Comfortable and stylish shoes for your feet."
        },
        {
            "id": 3,
            "category": "Electronics",
            "image": "https://source.unsplash.com/300x300/?electronics",
            "price": "$299.99",
            "description": "Cutting-edge electronics for your modern lifestyle."
        },
        {
            "id": 4,
            "category": "Home Decor",
            "image": "https://source.unsplash.com/300x300/?homedecor",
            "price": "$39.99",
            "description": "Stylish home decor items to elevate your living space."
        },
        {
            "id": 5,
            "category": "Beauty and Personal Care",
            "image": "https://source.unsplash.com/300x300/?beauty",
            "price": "$19.99",
            "description": "Beauty products to help you look and feel your best."
        },
        {
            "id": 6,
            "category": "Books",
            "image": "https://source.unsplash.com/300x300/?books",
            "price": "$14.99",
            "description": "Engaging books to stimulate your mind and imagination."
        },
        {
            "id": 7,
            "category": "Sports and Fitness",
            "image": "https://source.unsplash.com/300x300/?sports",
            "price": "$54.99",
            "description": "Sports gear and equipment for your active lifestyle."
        },
        {
            "id": 8,
            "category": "Groceries",
            "image": "https://source.unsplash.com/300x300/?groceries",
            "price": "$29.99",
            "description": "Quality groceries to keep your pantry stocked."
        },
        {
            "id": 9,
            "category": "Toys and Games",
            "image": "https://source.unsplash.com/300x300/?toys",
            "price": "$49.99",
            "description": "Fun toys and games for kids of all ages."
        },
        {
            "id": 10,
            "category": "Healthcare",
            "image": "https://source.unsplash.com/300x300/?healthcare",
            "price": "$9.99",
            "description": "Healthcare products to support your well-being."
        }
    ]

    const mobilePhones = [
        {
            "id": 1,
            "category": "Android Phones",
            "image": "https://source.unsplash.com/300x300/?android",
            "price": "$499.99",
            "description": "High-performance Android phones with the latest features."
        },
        {
            "id": 2,
            "category": "iOS Phones",
            "image": "https://source.unsplash.com/300x300/?ios",
            "price": "$699.99",
            "description": "Sleek iOS phones known for their user-friendly experience."
        },
        {
            "id": 3,
            "category": "Budget Phones",
            "image": "https://source.unsplash.com/300x300/?budget",
            "price": "$199.99",
            "description": "Affordable budget phones that offer great value for money."
        },
        {
            "id": 4,
            "category": "Flagship Phones",
            "image": "https://source.unsplash.com/300x300/?flagship",
            "price": "$899.99",
            "description": "Top-of-the-line flagship phones with cutting-edge technology."
        },
        {
            "id": 5,
            "category": "Camera Phones",
            "image": "https://source.unsplash.com/300x300/?camera",
            "price": "$599.99",
            "description": "Camera-centric phones for capturing stunning photos and videos."
        },
        {
            "id": 6,
            "category": "Business Phones",
            "image": "https://source.unsplash.com/300x300/?business",
            "price": "$799.99",
            "description": "Business-oriented phones designed for productivity and communication."
        },
        {
            "id": 7,
            "category": "Rugged Phones",
            "image": "https://source.unsplash.com/300x300/?rugged",
            "price": "$349.99",
            "description": "Rugged phones built to withstand tough conditions and environments."
        },
        {
            "id": 8,
            "category": "Foldable Phones",
            "image": "https://source.unsplash.com/300x300/?foldable",
            "price": "$1299.99",
            "description": "Innovative foldable phones that offer expanded screen real estate."
        },
        {
            "id": 9,
            "category": "Gaming Phones",
            "image": "https://source.unsplash.com/300x300/?gaming",
            "price": "$599.99",
            "description": "Phones optimized for gaming performance and immersive experiences."
        },
        {
            "id": 10,
            "category": "Compact Phones",
            "image": "https://source.unsplash.com/300x300/?compact",
            "price": "$399.99",
            "description": "Compact phones that pack power in a smaller form factor."
        }
    ]

    // Image URLs
    const imageUrls = [
        'https://source.unsplash.com/300x300/?shopping footwear',
        'https://source.unsplash.com/300x300/?shopping offer',
        'https://source.unsplash.com/300x300/?shopping phone',
        'https://source.unsplash.com/300x300/?shopping dress',
        'https://source.unsplash.com/300x300/?shopping headphone',
        'https://source.unsplash.com/300x300/?shopping laptop',
        'https://source.unsplash.com/300x300/?shopping car',
    ];

    const [searchText, setSearchText] = useState('');
    const filteredProfiles = profiles.filter(profile => profile.name.toLowerCase().includes(searchText.toLowerCase()));


    const renderProductItem = ({ item }) => (
        <View style={styles.productItem}>
            <Text style={styles.productTitle} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
            <Text style={styles.productPrice}>$ {item.price}</Text>
            <Image style={styles.productImage} source={{ uri: item.image }} />
            <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(item)}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );


    const renderProductItem_1 = ({ item }) => (
        <View style={styles.productItem}>
            <Text style={styles.productPrice}> {item.price}</Text>
            <Image style={styles.productImage} source={{ uri: item.image }} />
            <Text style={styles.productDetail} numberOfLines={2} ellipsizeMode="tail">{item.description}</Text>
            <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(item)}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );


    return (

        <View style={styles.container}>
            <ScrollView>
                {/* <Text></Text>
                <Text></Text> */}


                <View style={{ backgroundColor: 'rgb(133, 51, 255)' }}>
                    <View style={{ height: 30, }}>

                    </View>

                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search..."
                            onChangeText={text => setSearchText(text)}
                            value={searchText}
                        />
                    </View>
                    {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                        <Text style={{ paddingLeft: 5, borderRadius: 5, margin: 5, color: 'white' }}>CategoryShop By</Text>
                        <Text style={{ borderRadius: 5, margin: 5, color: 'white' }}>Wish List</Text>
                        <Text style={{ borderRadius: 5, margin: 5, color: 'white' }}>Deals</Text>
                        <Text style={{ borderRadius: 5, margin: 5, color: 'white' }}>Sell</Text>
                    </View> */}


                    <View>

                        <Animated.View style={[{ position: 'absolute', backgroundColor: 'red', zIndex: 100 }, { left: slideAnim }]}>
                            <TouchableOpacity onPress={toggleMenu} style={{}}>
                                <Text>{isOpen ? 'X' : '☰'}</Text>
                            </TouchableOpacity>

                            <View style={{ height: 200, justifyContent: 'flex-end', margin: 20 }}>
                                <Image source={{ uri: 'https://source.unsplash.com/300x300/?fruits' }} style={{ width: 260, height: 200, bottom: 1, }} />
                                <Text>Guard</Text>
                                <Text>ID : demo</Text>
                            </View>
                            <TouchableOpacity onPress={Events}>
                                <Text>Events</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Events}>
                                <Text>History</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Events}>
                                <Text>Checkpoint Assignment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Events}>
                                <Text>Settings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Events}>
                                <Text>User Guide</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Events}>
                                <Text>About</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Events}>
                                <Text>Logout</Text>
                            </TouchableOpacity>
                        </Animated.View>

                        {/* Header = HamburgerMenu, QLD QR-Patrol, TimeLine */}
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={toggleMenu}>
                                    <Text>{isOpen ? 'X' : '☰'}</Text>
                                </TouchableOpacity>
                                <View>
                                    <Text>Logo</Text>
                                </View>
                                <View>
                                    <Text onPress={TimeLine}>Card</Text>
                                </View>
                            </View>
                        </View>


                    </View>



                </View>



                {/* Product List */}
                <FlatList
                    data={products}
                    renderItem={renderProductItem}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true} // Set horizontal scrolling
                />

                {/* ScrollView Image */}
                <View>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={(event) => {
                            const { width } = Dimensions.get('window');
                            const page = Math.round(event.nativeEvent.contentOffset.x / width);
                            setActivePage(page);
                        }}
                    >
                        {imageUrls.map((imageUrl, index) => (
                            <View
                                key={index}
                                style={{ width: Dimensions.get('window').width, height: 200 }}
                            >
                                <Image source={{ uri: imageUrl }} style={{ flex: 1, width: null, height: null }} resizeMode="cover" />
                            </View>
                        ))}
                    </ScrollView>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        {imageUrls.map((_, index) => (
                            <View
                                key={index}
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                    marginHorizontal: 4,
                                    backgroundColor: activePage === index ? 'blue' : 'gray',
                                }}
                            />
                        ))}
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row', flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    padding: 10,
                }}>
                    {categoriesData.map((item, index) => (
                        <View>
                            <View key={index} style={{ height: 75, width: 75, borderWidth: 1, margin: 5, borderColor: 'rgb(75, 0, 130)' }}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                                <Text style={{ fontSize: 10 }}>{item.category}</Text>
                            </View>
                        </View>
                    ))}
                </View>


                {/* Product List */}
                {/* <FlatList
                data={products}
                renderItem={renderProductItem}
                keyExtractor={item => item.id.toString()}
                horizontal={true} // Set horizontal scrolling
            /> */}
                <Text>Categories</Text>
                <FlatList
                    data={mobilePhones}
                    renderItem={renderProductItem_1}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true} // Set horizontal scrolling
                />
                <Text>Categories</Text>
                <FlatList
                    data={categoriesData_1}
                    renderItem={renderProductItem_1}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true} // Set horizontal scrolling
                />
                <Text>Categories</Text>
                <FlatList
                    data={categoriesData_2}
                    renderItem={renderProductItem_1}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true} // Set horizontal scrolling
                />

            </ScrollView>

            {/* <View style={{ height: 50, backgroundColor: 'rgb(133, 51, 255)', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 12, }}>© 2023 Your E-commerce App</Text>
            </View> */}
            <View style={{ height: 50, backgroundColor: 'rgb(133, 51, 255)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                <TouchableOpacity onPress={handleHomePress}>
                    <Icon name="home" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleUserPress}>
                    <Icon name="user" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRefreshPress}>
                    <Icon name="refresh" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCartPress}>
                    <Icon name="shopping-cart" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleBarsPress}>
                    <Icon name="bars" size={20} color="white" />
                </TouchableOpacity>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    searchContainer: {
        padding: 10,
        // backgroundColor: '#EAF3FB',
        backgroundColor: 'rgb(133, 51, 255)'
    },
    searchInput: {
        height: 40,
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    optionsContainer: {
        backgroundColor: '#EAF3FB',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: 'red',
    },
    optionScrollContent: {
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    option: {
        fontSize: 10,
        color: 'white',
        backgroundColor: 'blue',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    profilesContainer: {
        flex: 1,
    },
    profileScrollContent: {
        paddingVertical: 20,
    },
    profileItem: {
        marginRight: 10,
        alignItems: 'center',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    profileName: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
    },
    profileDescription: {
        fontSize: 14,
        textAlign: 'center',
    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    productItem: {
        height: 220,
        width: 150,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        margin: 5,
        backgroundColor: '#ebedf0'

    },
    productTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        overflow: 'hidden',
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
    },



    box: {
        height: 100,
        width: 100,
        borderWidth: 1,
        margin: 5,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
    },
    categoriesDatacontainer: {
        container: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 10,
        },

    },
    addToCartButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginTop: 10,
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    productDetail: {
        fontSize: 12,
        color: '#888',
        marginTop: 5,
        overflow: 'hidden',
        // white space no wreap
        // textoverflow :
        fontWeight: 'bold',

    },


});

// export default ShoppingHome;

const mapDispatchToProps = {
    addToCart,
  };
  
  export default connect(null, mapDispatchToProps)(ShoppingHome);
  
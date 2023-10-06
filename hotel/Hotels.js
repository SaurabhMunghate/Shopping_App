import {
  ScrollView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity,
  TextInput
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icons from FontAwesome
import axios from 'axios';

const Hotels = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [hoteldata, hotelData] = useState([]);

  const [isInWishlist, setIsInWishlist] = useState(false);


  const handleLoginPagePress = () => { navigation.navigate('LoginPage'); }
  const handleExplorePress = () => { navigation.navigate('Explore'); }
  const handleWishlistPress = () => { navigation.navigate('Wishlist'); }


  const fetchUnsplashData = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: {
          count: 10, // Number of random images
          client_id: '3Jm5L3kd9_L27x6tqWsXWI-qTHmAKBdLpyNXkM1qANc', // Replace with your Unsplash API key
          query: 'hotel', // Add relevant search terms
        },
      });
      console.log(response.data);
      hotelData(response.data);
    } catch (error) {
      console.error('Error fetching Unsplash data:', error);
    }
  };

  useEffect(() => {
    fetchUnsplashData();
  }, []);

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
    <View style={{
      height: 50, width: 100, borderWidth: 1,
      padding: 5, margin: 5, justifyContent: 'center',
      alignItems: 'center', borderRadius: 6,
      backgroundColor: 'white'
    }}>
      {/* <Text style={styles.productPrice}>{item.id}</Text> */}
      <Text style={{}}>{item.category}</Text>
      {/* <TouchableOpacity style={styles.addToCartButton} >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity> */}
    </View>
  );

  const renderImageItem_1 = ({ item }) => (
    <View style={{
      height: 100, width: '100%', borderWidth: 1,
      padding: 10, margin: 5, justifyContent: 'center',
      alignItems: 'center', borderRadius: 6,
      backgroundColor: 'white'
    }}>
      {/* <Text style={styles.productPrice}>{item.id}</Text> */}
      <Text style={{}}>{item.id}</Text>
      {/* <TouchableOpacity style={styles.addToCartButton} >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity> */}
    </View>
  );

  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.urls.regular }} style={styles.image} />
      <Text>Price: ₹{Math.floor(Math.random() * 500) + 1000}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Day/Night: {Math.random() > 0.5 ? 'Day' : 'Night'}</Text>
      <Text>Location: {item.location.name}</Text>
      <Text>{Math.floor(Math.random() * 50)} kilometres away</Text>
      <Text>Details: This is a fantastic hotel...</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(item)}>
        <Text style={styles.addToCartButtonText}>Book Now</Text>
        
      </TouchableOpacity>
      {/* <Text style={{
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}>Wishlist</Text> */}
      <TouchableOpacity onPress={addToWishlistPress} style={{ margin: 5 }}>
        <Icon name="heart" size={20} color={isInWishlist ? 'red' : 'pink'} /> 
      </TouchableOpacity>
    </View>
  );


  const hoteldata_1 = [
    {
      "alt_description": "three white-and-brown wooden pool chairs",
      "blur_hash": "LBA^I4=xMxtR^kxuf+Mx0eE2tRSg",
      "breadcrumbs": [],
      "color": "#595959",
      "created_at": "2019-09-24T14:31:56Z",
      "current_user_collections": [],
      "description": null,
      "downloads": 6313,
      "exif": {
        "aperture": "2.8",
        "exposure_time": "1/500",
        "focal_length": "50.0",
        "iso": 100,
        "make": "SONY",
        "model": "ILCE-7RM2",
        "name": "SONY, ILCE-7RM2"
      },
      "height": 7316,
      "id": "MhPJdWYWbWI",
      "liked_by_user": false,
      "likes": 295,
      "links": {
        "download": "https://unsplash.com/photos/MhPJdWYWbWI/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "download_location": "https://api.unsplash.com/photos/MhPJdWYWbWI/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "html": "https://unsplash.com/photos/MhPJdWYWbWI",
        "self": "https://api.unsplash.com/photos/MhPJdWYWbWI"
      },
      "location": {
        "city": "กรุงเทพมหานคร",
        "country": "ประเทศไทย",
        "name": "Bangkok, ประเทศไทย",
        "position": [
          "Object"
        ]
      },
      "promoted_at": "2019-09-25T06:43:10Z",
      "slug": "MhPJdWYWbWI",
      "sponsorship": null,
      "topic_submissions": {},
      "updated_at": "2023-08-24T03:09:06Z",
      "urls": {
        "full": "https://images.unsplash.com/photo-1569335468885-d7d1a41e570c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=85",
        "raw": "https://images.unsplash.com/photo-1569335468885-d7d1a41e570c?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3",
        "regular": "https://images.unsplash.com/photo-1569335468885-d7d1a41e570c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1569335468885-d7d1a41e570c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=400",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1569335468885-d7d1a41e570c",
        "thumb": "https://images.unsplash.com/photo-1569335468885-d7d1a41e570c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=200"
      },
      "user": {
        "accepted_tos": true,
        "bio": "Bangkok, Thailand | Instagram : SiravitPlug | Thank you all for your support.\n\n",
        "first_name": "SiravitPlug",
        "for_hire": true,
        "id": "8OnOcZdxGHw",
        "instagram_username": "SiravitPlug",
        "last_name": null,
        "links": [
          "Object"
        ],
        "location": "Bangkok, Thaiand",
        "name": "SiravitPlug",
        "portfolio_url": "https://www.instagram.com/siravitplug/",
        "profile_image": [
          "Object"
        ],
        "social": [
          "Object"
        ],
        "total_collections": 1,
        "total_likes": 0,
        "total_photos": 20,
        "twitter_username": "SiravitPlug",
        "updated_at": "2023-08-03T09:24:52Z",
        "username": "siravitplug"
      },
      "views": 890040,
      "width": 4880
    },
    {
      "alt_description": "two white comforter set",
      "blur_hash": "LCDcXS%N-p%MsR?bITD%~qIUt7xv",
      "breadcrumbs": [],
      "color": "#8c8c8c",
      "created_at": "2019-05-27T17:07:10Z",
      "current_user_collections": [],
      "description": "an empty hotel bedroom",
      "downloads": 7062,
      "exif": {
        "aperture": "4",
        "exposure_time": "1/50",
        "focal_length": "27.0",
        "iso": 1600,
        "make": "Canon",
        "model": "Canon EOS REBEL T5",
        "name": "Canon, EOS REBEL T5"
      },
      "height": 3456,
      "id": "iMnSqmT2RGE",
      "liked_by_user": false,
      "likes": 95,
      "links": {
        "download": "https://unsplash.com/photos/iMnSqmT2RGE/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "download_location": "https://api.unsplash.com/photos/iMnSqmT2RGE/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "html": "https://unsplash.com/photos/iMnSqmT2RGE",
        "self": "https://api.unsplash.com/photos/iMnSqmT2RGE"
      },
      "location": {
        "city": "Los Angeles",
        "country": null,
        "name": "Los Angeles",
        "position": [
          "Object"
        ]
      },
      "promoted_at": null,
      "slug": "iMnSqmT2RGE",
      "sponsorship": null,
      "topic_submissions": {},
      "updated_at": "2023-08-24T05:07:27Z",
      "urls": {
        "full": "https://images.unsplash.com/photo-1558976825-6b1b03a03719?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=85",
        "raw": "https://images.unsplash.com/photo-1558976825-6b1b03a03719?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3",
        "regular": "https://images.unsplash.com/photo-1558976825-6b1b03a03719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1558976825-6b1b03a03719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=400",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1558976825-6b1b03a03719",
        "thumb": "https://images.unsplash.com/photo-1558976825-6b1b03a03719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=200"
      },
      "user": {
        "accepted_tos": true,
        "bio": "photographer and lover of all things; based in Princeton, NJ/San Diego, CA.\n please give credit if using my photos for personal/public use.",
        "first_name": "Morgan",
        "for_hire": true,
        "id": "gbnBbfaIkcw",
        "instagram_username": null,
        "last_name": "Lane",
        "links": [
          "Object"
        ],
        "location": null,
        "name": "Morgan Lane",
        "portfolio_url": null,
        "profile_image": [
          "Object"
        ],
        "social": [
          "Object"
        ],
        "total_collections": 3,
        "total_likes": 54,
        "total_photos": 42,
        "twitter_username": null,
        "updated_at": "2023-08-03T09:49:12Z",
        "username": "themorganlane"
      },
      "views": 1011677,
      "width": 5184
    },
    {
      "alt_description": "hallway of building",
      "blur_hash": "L98De1js0hfS9^jt-TfkM|a#t6j?",
      "breadcrumbs": [],
      "color": "#26260c",
      "created_at": "2017-05-21T11:15:19Z",
      "current_user_collections": [],
      "description": "What door do you take? The way of life ..",
      "downloads": 85268,
      "exif": {
        "aperture": null,
        "exposure_time": null,
        "focal_length": null,
        "iso": null,
        "make": null,
        "model": null,
        "name": null
      },
      "height": 3648,
      "id": "LfqmND-hym8",
      "liked_by_user": false,
      "likes": 889,
      "links": {
        "download": "https://unsplash.com/photos/LfqmND-hym8/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "download_location": "https://api.unsplash.com/photos/LfqmND-hym8/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "html": "https://unsplash.com/photos/LfqmND-hym8",
        "self": "https://api.unsplash.com/photos/LfqmND-hym8"
      },
      "location": {
        "city": null,
        "country": null,
        "name": null,
        "position": [
          "Object"
        ]
      },
      "promoted_at": "2017-05-22T10:11:37Z",
      "slug": "LfqmND-hym8",
      "sponsorship": null,
      "topic_submissions": {},
      "updated_at": "2023-08-23T20:01:34Z",
      "urls": {
        "full": "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=85",
        "raw": "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3",
        "regular": "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=400",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1495365200479-c4ed1d35e1aa",
        "thumb": "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=200"
      },
      "user": {
        "accepted_tos": false,
        "bio": null,
        "first_name": "runnyrem",
        "for_hire": false,
        "id": "AyhD6pLIpik",
        "instagram_username": "runnyrem",
        "last_name": null,
        "links": [
          "Object"
        ],
        "location": null,
        "name": "runnyrem",
        "portfolio_url": null,
        "profile_image": [
          "Object"
        ],
        "social": [
          "Object"
        ],
        "total_collections": 0,
        "total_likes": 0,
        "total_photos": 2,
        "twitter_username": null,
        "updated_at": "2023-08-03T23:57:49Z",
        "username": "runnyrem"
      },
      "views": 8654917,
      "width": 5472
    },
    {
      "alt_description": "black flat screen tv on white wooden tv rack",
      "blur_hash": "LZHn.}Rjr=t7~WR+RjWWNGs:WBWB",
      "breadcrumbs": [],
      "color": "#c0c0a6",
      "created_at": "2020-06-15T14:01:22Z",
      "current_user_collections": [],
      "description": null,
      "downloads": 2840,
      "exif": {
        "aperture": null,
        "exposure_time": null,
        "focal_length": null,
        "iso": null,
        "make": "Apple",
        "model": "iPhone",
        "name": "Apple, iPhone"
      },
      "height": 3024,
      "id": "3n7bxyRYQ24",
      "liked_by_user": false,
      "likes": 47,
      "links": {
        "download": "https://unsplash.com/photos/3n7bxyRYQ24/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "download_location": "https://api.unsplash.com/photos/3n7bxyRYQ24/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "html": "https://unsplash.com/photos/3n7bxyRYQ24",
        "self": "https://api.unsplash.com/photos/3n7bxyRYQ24"
      },
      "location": {
        "city": "Paris",
        "country": "Frankreich",
        "name": "Paris, Frankreich",
        "position": [
          "Object"
        ]
      },
      "promoted_at": null,
      "slug": "3n7bxyRYQ24",
      "sponsorship": null,
      "topic_submissions": {},
      "updated_at": "2023-08-24T01:14:00Z",
      "urls": {
        "full": "https://images.unsplash.com/photo-1592229505801-77b31918d822?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=85",
        "raw": "https://images.unsplash.com/photo-1592229505801-77b31918d822?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3",
        "regular": "https://images.unsplash.com/photo-1592229505801-77b31918d822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1592229505801-77b31918d822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=400",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1592229505801-77b31918d822",
        "thumb": "https://images.unsplash.com/photo-1592229505801-77b31918d822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=200"
      },
      "user": {
        "accepted_tos": true,
        "bio": "Euer Portal für Luxusreisen - Hier findet Ihr die besten Shots aus der Business Class, aus Luxushotel und von vergangenen Reisen.\nWebsite: reisetopia.de & suitespot.fr - Instagram: www.instagram.com/reisetopia & www.instagram.com/suitespotfr",
        "first_name": "reisetopia",
        "for_hire": false,
        "id": "nejd7sDTXNs",
        "instagram_username": "reisetopia",
        "last_name": null,
        "links": [
          "Object"
        ],
        "location": "Berlin, Germany",
        "name": "reisetopia",
        "portfolio_url": "https://reisetopia.de/",
        "profile_image": [
          "Object"
        ],
        "social": [
          "Object"
        ],
        "total_collections": 21,
        "total_likes": 6,
        "total_photos": 157,
        "twitter_username": null,
        "updated_at": "2023-08-02T11:23:51Z",
        "username": "reisetopia"
      },
      "views": 375157,
      "width": 4032
    },
    {
      "alt_description": "gray curtain",
      "blur_hash": "LEA^5rxtZ#n$xaV@ozf+0eX8XTWB",
      "breadcrumbs": [],
      "color": "#262626",
      "created_at": "2019-09-24T14:31:56Z",
      "current_user_collections": [],
      "description": null,
      "downloads": 6275,
      "exif": {
        "aperture": "2.8",
        "exposure_time": "1/400",
        "focal_length": "50.0",
        "iso": 100,
        "make": "SONY",
        "model": "ILCE-7RM2",
        "name": "SONY, ILCE-7RM2"
      },
      "height": 7718,
      "id": "xLor7ShIUAc",
      "liked_by_user": false,
      "likes": 225,
      "links": {
        "download": "https://unsplash.com/photos/xLor7ShIUAc/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "download_location": "https://api.unsplash.com/photos/xLor7ShIUAc/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "html": "https://unsplash.com/photos/xLor7ShIUAc",
        "self": "https://api.unsplash.com/photos/xLor7ShIUAc"
      },
      "location": {
        "city": null,
        "country": null,
        "name": null,
        "position": [
          "Object"
        ]
      },
      "promoted_at": "2019-09-24T20:54:45Z",
      "slug": "xLor7ShIUAc",
      "sponsorship": null,
      "topic_submissions": {},
      "updated_at": "2023-08-24T04:09:06Z",
      "urls": {
        "full": "https://images.unsplash.com/photo-1569335468888-1d3e4a5a3595?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=85",
        "raw": "https://images.unsplash.com/photo-1569335468888-1d3e4a5a3595?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3",
        "regular": "https://images.unsplash.com/photo-1569335468888-1d3e4a5a3595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1569335468888-1d3e4a5a3595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=400",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1569335468888-1d3e4a5a3595",
        "thumb": "https://images.unsplash.com/photo-1569335468888-1d3e4a5a3595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=200"
      },
      "user": {
        "accepted_tos": true,
        "bio": "Bangkok, Thailand | Instagram : SiravitPlug | Thank you all for your support.\n\n",
        "first_name": "SiravitPlug",
        "for_hire": true,
        "id": "8OnOcZdxGHw",
        "instagram_username": "SiravitPlug",
        "last_name": null,
        "links": [
          "Object"
        ],
        "location": "Bangkok, Thaiand",
        "name": "SiravitPlug",
        "portfolio_url": "https://www.instagram.com/siravitplug/",
        "profile_image": [
          "Object"
        ],
        "social": [
          "Object"
        ],
        "total_collections": 1,
        "total_likes": 0,
        "total_photos": 20,
        "twitter_username": "SiravitPlug",
        "updated_at": "2023-08-03T09:24:52Z",
        "username": "siravitplug"
      },
      "views": 1406052,
      "width": 5148
    },
    {
      "alt_description": "brown wooden lounge chairs near pool surrounded by palm trees",
      "blur_hash": "LPHVPF4nxZMx*0IotRRP0K%gR*R*",
      "breadcrumbs": [],
      "color": "#8ca6a6",
      "created_at": "2019-02-04T15:34:54Z",
      "current_user_collections": [],
      "description": null,
      "downloads": 69864,
      "exif": {
        "aperture": "8.0",
        "exposure_time": "1/125",
        "focal_length": "24.0",
        "iso": 100,
        "make": "NIKON CORPORATION",
        "model": "NIKON D610",
        "name": "NIKON CORPORATION, NIKON D610"
      },
      "height": 3000,
      "id": "vmIWr0NnpCQ",
      "liked_by_user": false,
      "likes": 975,
      "links": {
        "download": "https://unsplash.com/photos/vmIWr0NnpCQ/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "download_location": "https://api.unsplash.com/photos/vmIWr0NnpCQ/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "html": "https://unsplash.com/photos/vmIWr0NnpCQ",
        "self": "https://api.unsplash.com/photos/vmIWr0NnpCQ"
      },
      "location": {
        "city": "Bavaro",
        "country": "Dominican Republic",
        "name": "Majestic Elegance - Punta Cana, Bavaro, Dominican Republic",
        "position": [
          "Object"
        ]
      },
      "promoted_at": "2019-02-05T09:26:31Z",
      "slug": "vmIWr0NnpCQ",
      "sponsorship": null,
      "topic_submissions": {},
      "updated_at": "2023-08-23T19:06:14Z",
      "urls": {
        "full": "https://images.unsplash.com/photo-1549294413-26f195200c16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=85",
        "raw": "https://images.unsplash.com/photo-1549294413-26f195200c16?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3",
        "regular": "https://images.unsplash.com/photo-1549294413-26f195200c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1549294413-26f195200c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=400",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1549294413-26f195200c16",
        "thumb": "https://images.unsplash.com/photo-1549294413-26f195200c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=200"
      },
      "user": {
        "accepted_tos": true,
        "bio": "☯️ life is all about contrast\ndazzling warm glows + intimate dark abstraction",
        "first_name": "Christian",
        "for_hire": true,
        "id": "uGmx9hGya0o",
        "instagram_username": "_christianlambert",
        "last_name": "Lambert",
        "links": [
          "Object"
        ],
        "location": "Voorhees, NJ",
        "name": "Christian Lambert",
        "portfolio_url": null,
        "profile_image": [
          "Object"
        ],
        "social": [
          "Object"
        ],
        "total_collections": 1,
        "total_likes": 2333,
        "total_photos": 193,
        "twitter_username": "cl2solutions",
        "updated_at": "2023-08-04T03:03:26Z",
        "username": "_christianlambert"
      },
      "views": 6558933,
      "width": 2400
    },
    {
      "alt_description": "white and blue concrete building near green trees and body of water during daytime",
      "blur_hash": "LIFZE1iHQ-KQcukXV@-Tu5R5kBa$",
      "breadcrumbs": [],
      "color": "#F5EFE7",
      "created_at": "2020-08-28T09:03:33Z",
      "current_user_collections": [],
      "description": "Marriott Hotel Kigali\nCredits: Franck Axel",
      "downloads": 5550,
      "exif": {
        "aperture": "10.0",
        "exposure_time": "1/640",
        "focal_length": "14.0",
        "iso": 400,
        "make": "Canon",
        "model": "Canon EOS 5D Mark III",
        "name": "Canon, EOS 5D Mark III"
      },
      "height": 3623,
      "id": "d-eWGvLCZfQ",
      "liked_by_user": false,
      "likes": 24,
      "links": {
        "download": "https://unsplash.com/photos/d-eWGvLCZfQ/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "download_location": "https://api.unsplash.com/photos/d-eWGvLCZfQ/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "html": "https://unsplash.com/photos/d-eWGvLCZfQ",
        "self": "https://api.unsplash.com/photos/d-eWGvLCZfQ"
      },
      "location": {
        "city": "Kigali",
        "country": "Rwanda",
        "name": "Kigali, Rwanda",
        "position": [
          "Object"
        ]
      },
      "promoted_at": null,
      "slug": "d-eWGvLCZfQ",
      "sponsorship": null,
      "topic_submissions": {},
      "updated_at": "2023-08-23T15:14:48Z",
      "urls": {
        "full": "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=85",
        "raw": "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3",
        "regular": "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=400",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1598605272254-16f0c0ecdfa5",
        "thumb": "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=200"
      },
      "user": {
        "accepted_tos": true,
        "bio": null,
        "first_name": "Reagan",
        "for_hire": true,
        "id": "5CDe4O1J4Y0",
        "instagram_username": null,
        "last_name": "M.",
        "links": [
          "Object"
        ],
        "location": "Phoenix, AZ",
        "name": "Reagan M.",
        "portfolio_url": null,
        "profile_image": [
          "Object"
        ],
        "social": [
          "Object"
        ],
        "total_collections": 0,
        "total_likes": 54,
        "total_photos": 35,
        "twitter_username": "reaganitude",
        "updated_at": "2023-08-16T23:29:05Z",
        "username": "reaganitude"
      },
      "views": 398165,
      "width": 5435
    },
    {
      "alt_description": "white towels on brown wooden stool",
      "blur_hash": "LmG[Zt%L%Mt70KV@M{RjkXf+ofay",
      "breadcrumbs": [],
      "color": "#0c2626",
      "created_at": "2018-06-03T00:44:49Z",
      "current_user_collections": [],
      "description": null,
      "downloads": 16779,
      "exif": {
        "aperture": "2.4",
        "exposure_time": "1/60",
        "focal_length": "6.0",
        "iso": 80,
        "make": "Apple",
        "model": "iPhone X",
        "name": "Apple, iPhone X"
      },
      "height": 4032,
      "id": "Ow_GfqblrG8",
      "liked_by_user": false,
      "likes": 307,
      "links": {
        "download": "https://unsplash.com/photos/Ow_GfqblrG8/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "download_location": "https://api.unsplash.com/photos/Ow_GfqblrG8/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "html": "https://unsplash.com/photos/Ow_GfqblrG8",
        "self": "https://api.unsplash.com/photos/Ow_GfqblrG8"
      },
      "location": {
        "city": null,
        "country": null,
        "name": null,
        "position": [
          "Object"
        ]
      },
      "promoted_at": null,
      "slug": "Ow_GfqblrG8",
      "sponsorship": null,
      "topic_submissions": {},
      "updated_at": "2023-08-23T10:04:10Z",
      "urls": {
        "full": "https://images.unsplash.com/photo-1527986654082-0b5b3fef2632?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=85",
        "raw": "https://images.unsplash.com/photo-1527986654082-0b5b3fef2632?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3",
        "regular": "https://images.unsplash.com/photo-1527986654082-0b5b3fef2632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1527986654082-0b5b3fef2632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=400",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1527986654082-0b5b3fef2632",
        "thumb": "https://images.unsplash.com/photo-1527986654082-0b5b3fef2632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=200"
      },
      "user": {
        "accepted_tos": true,
        "bio": "My cup overflows. \nwww.primalpath.co   www.church.nyc www.formingmen.com\n",
        "first_name": "Jon",
        "for_hire": false,
        "id": "-myGpytHnPo",
        "instagram_username": "jontyson",
        "last_name": "Tyson",
        "links": [
          "Object"
        ],
        "location": "New York City",
        "name": "Jon Tyson",
        "portfolio_url": null,
        "profile_image": [
          "Object"
        ],
        "social": [
          "Object"
        ],
        "total_collections": 0,
        "total_likes": 130,
        "total_photos": 5091,
        "twitter_username": "jontyson",
        "updated_at": "2023-08-24T02:57:10Z",
        "username": "jontyson"
      },
      "views": 3291992,
      "width": 3024
    },
    {
      "alt_description": "black flat screen tv on black wooden tv rack",
      "blur_hash": "LhKUJ~NdWXj@_Ns,n~a}%2ozIVoL",
      "breadcrumbs": [],
      "color": "#c0c0c0",
      "created_at": "2021-09-07T21:38:30Z",
      "current_user_collections": [],
      "description": null,
      "downloads": 1478,
      "exif": {
        "aperture": "9.0",
        "exposure_time": "0.6",
        "focal_length": "18.0",
        "iso": 200,
        "make": "Canon",
        "model": "Canon EOS R",
        "name": "Canon, EOS R"
      },
      "height": 4480,
      "id": "FIHysoEYKRo",
      "liked_by_user": false,
      "likes": 12,
      "links": {
        "download": "https://unsplash.com/photos/FIHysoEYKRo/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "download_location": "https://api.unsplash.com/photos/FIHysoEYKRo/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "html": "https://unsplash.com/photos/FIHysoEYKRo",
        "self": "https://api.unsplash.com/photos/FIHysoEYKRo"
      },
      "location": {
        "city": null,
        "country": null,
        "name": null,
        "position": [
          "Object"
        ]
      },
      "promoted_at": null,
      "slug": "FIHysoEYKRo",
      "sponsorship": null,
      "topic_submissions": {},
      "updated_at": "2023-08-23T15:22:33Z",
      "urls": {
        "full": "https://images.unsplash.com/photo-1631049035326-57414e7739eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=85",
        "raw": "https://images.unsplash.com/photo-1631049035326-57414e7739eb?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3",
        "regular": "https://images.unsplash.com/photo-1631049035326-57414e7739eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1631049035326-57414e7739eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=400",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1631049035326-57414e7739eb",
        "thumb": "https://images.unsplash.com/photo-1631049035326-57414e7739eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=200"
      },
      "user": {
        "accepted_tos": true,
        "bio": "Real Estate Photography | Matterport | 3D Laser Scanning | 3D Tours\nOttawa | Toronto | Montreal 🇨🇦 For more visit 👉 https://www.point3d.ca",
        "first_name": "Point3D",
        "for_hire": true,
        "id": "fGfbDPVIqrQ",
        "instagram_username": "3dottawa",
        "last_name": "Commercial Imaging Ltd.",
        "links": [
          "Object"
        ],
        "location": "Canada",
        "name": "Point3D Commercial Imaging Ltd.",
        "portfolio_url": "https://www.point3d.ca",
        "profile_image": [
          "Object"
        ],
        "social": [
          "Object"
        ],
        "total_collections": 0,
        "total_likes": 0,
        "total_photos": 579,
        "twitter_username": "3dottawa",
        "updated_at": "2023-08-03T11:27:58Z",
        "username": "3dottawa"
      },
      "views": 160383,
      "width": 6720
    },
    {
      "alt_description": "white bed linen on bed",
      "blur_hash": "LOJQ~1~pMw-;.8%LNHtR%KE1t7kC",
      "breadcrumbs": [],
      "color": "#c0a6a6",
      "created_at": "2020-04-26T04:16:12Z",
      "current_user_collections": [],
      "description": "Hotel bedroom ",
      "downloads": 8671,
      "exif": {
        "aperture": "7.1",
        "exposure_time": "1/15",
        "focal_length": "18.0",
        "iso": 320,
        "make": "SONY",
        "model": "ILCE-7M3",
        "name": "SONY, ILCE-7M3"
      },
      "height": 3663,
      "id": "pHcLOc_RzQ0",
      "liked_by_user": false,
      "likes": 66,
      "links": {
        "download": "https://unsplash.com/photos/pHcLOc_RzQ0/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "download_location": "https://api.unsplash.com/photos/pHcLOc_RzQ0/download?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8",
        "html": "https://unsplash.com/photos/pHcLOc_RzQ0",
        "self": "https://api.unsplash.com/photos/pHcLOc_RzQ0"
      },
      "location": {
        "city": null,
        "country": null,
        "name": null,
        "position": [
          "Object"
        ]
      },
      "promoted_at": null,
      "slug": "pHcLOc_RzQ0",
      "sponsorship": null,
      "topic_submissions": {
        "interiors": [
          "Object"
        ]
      },
      "updated_at": "2023-08-23T12:12:44Z",
      "urls": {
        "full": "https://images.unsplash.com/photo-1587874522487-fe10e954d035?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=85",
        "raw": "https://images.unsplash.com/photo-1587874522487-fe10e954d035?ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3",
        "regular": "https://images.unsplash.com/photo-1587874522487-fe10e954d035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1587874522487-fe10e954d035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=400",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1587874522487-fe10e954d035",
        "thumb": "https://images.unsplash.com/photo-1587874522487-fe10e954d035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTMyMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI4NzA0OTZ8&ixlib=rb-4.0.3&q=80&w=200"
      },
      "user": {
        "accepted_tos": true,
        "bio": "I like to work on any kind of photography related\nwedding, portrait, architecture, interior shoot, pre-wedding  I also do video editing . ",
        "first_name": "Pranav Kumar",
        "for_hire": true,
        "id": "3OXtLDRh8mk",
        "instagram_username": "Peejayvisual",
        "last_name": "Jain",
        "links": [
          "Object"
        ],
        "location": "Chandrapur, Maharastra",
        "name": "Pranav Kumar Jain",
        "portfolio_url": "https://www.youtube.com/user/MrPranavful",
        "profile_image": [
          "Object"
        ],
        "social": [
          "Object"
        ],
        "total_collections": 7,
        "total_likes": 182,
        "total_photos": 126,
        "twitter_username": "jimbrojackman",
        "updated_at": "2023-08-03T23:31:59Z",
        "username": "peejayvisual"
      },
      "views": 4029150,
      "width": 5494
    }
  ]
  const category = [
    { "id": 1, "category": "Amazing pools" },
    { "id": 2, "category": "Farms" },
    { "id": 3, "category": "Amazing views" },
    { "id": 4, "category": "National parks" },
    { "id": 5, "category": "Camping" },
    { "id": 6, "category": "Lakefront" },
    { "id": 7, "category": "Rooms" },
    { "id": 8, "category": "OMG!" },
    { "id": 9, "category": "Beachfront" },
    { "id": 10, "category": "Cabins" },
    { "id": 11, "category": "Tiny homes" },
    { "id": 12, "category": "Countryside" },
    { "id": 13, "category": "Castles" },
    { "id": 14, "category": "Design" },
    { "id": 15, "category": "Luxe" },
    { "id": 16, "category": "Treehouses" },
    { "id": 17, "category": "Tropical" },
    { "id": 18, "category": "Bed & breakfasts" },
    { "id": 19, "category": "Trending" },
    { "id": 20, "category": "Iconic cities" },
    { "id": 21, "category": "Earth homes" },
    { "id": 22, "category": "Vineyards" },
    { "id": 23, "category": "Historical homes" },
    { "id": 24, "category": "Skiing" },
    { "id": 25, "category": "Arctic" },
    { "id": 26, "category": "Islands" },
    { "id": 27, "category": "Off-the-grid" },
    { "id": 28, "category": "Top of the world" },
    { "id": 29, "category": "Boats" },
    { "id": 30, "category": "A-frames" },
    { "id": 31, "category": "Caves" },
    { "id": 32, "category": "Mansions" },
    { "id": 33, "category": "Domes" },
    { "id": 34, "category": "Cycladic homes" },
    { "id": 35, "category": "New" },
    { "id": 36, "category": "Surfing" },
    { "id": 37, "category": "Houseboats" },
    { "id": 38, "category": "Play" },
    { "id": 39, "category": "Containers" },
    { "id": 40, "category": "Desert" },
    { "id": 41, "category": "Chef's kitchens" },
    { "id": 42, "category": "Creative spaces" },
    { "id": 43, "category": "Minsus" },
    { "id": 44, "category": "Dammusi" },
    { "id": 45, "category": "Ryokans" },
    { "id": 46, "category": "Barns" },
    { "id": 47, "category": "Grand pianos" },
    { "id": 48, "category": "Golfing" },
    { "id": 49, "category": "Ski-in/out" },
    { "id": 50, "category": "Yurts" },
    { "id": 51, "category": "Casas particulares" },
    { "id": 52, "category": "Riads" },
    { "id": 53, "category": "Adapted" },
    { "id": 54, "category": "Trulli" },
    { "id": 55, "category": "Shepherd's huts" },
    { "id": 56, "category": "Windmills" },
    { "id": 57, "category": "Camper vans" },
    { "id": 58, "category": "Hanoks" },
    { "id": 59, "category": "Towers" },
    { "id": 60, "category": "Beach" },
    { "id": 61, "category": "Lake" }
  ]

  const handleAddToCart = (item) => { 
    console.log('Item added to cart:', item);
    navigation.navigate('Card', { item });
  }

  const addToWishlistPress = () => {
    setIsInWishlist(!isInWishlist);
  };

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.searchContainer}>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
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
          horizontal={true} // Set horizontal scrolling
        />
      </View>

      <ScrollView>
        <FlatList
          data={hoteldata_1}
          renderItem={renderImageItem}
          keyExtractor={item => item.id.toString()}
        // horizontal={true} // Set horizontal scrolling
        />
      </ScrollView>


      <View style={{
        height: 50, backgroundColor: '#8B008B', flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 15
      }}>
        <TouchableOpacity onPress={handleExplorePress}>
          <Icon name="search" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWishlistPress}>
          <Icon name="heart" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLoginPagePress}>
          <Icon name="home" size={20} color="white" />
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default Hotels

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  searchContainer: {
    padding: 10,
    // backgroundColor: '#EAF3FB',
    backgroundColor: '#8B008B'
  },
  imageContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#8B008B'
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: "center",
    borderRadius: 10,
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
})
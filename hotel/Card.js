import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const EventMME = () => {
  const itemm = [
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
  ];

  const handleAddToCart = (item) => {
    // Handle booking logic here
    console.log('Handle booking logic here : ',item)
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: itemm[0].urls.regular }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.description}>{itemm[0].alt_description}</Text>
          <Text style={styles.price}>Price: ₹{Math.floor(Math.random() * 500) + 1000}</Text>
          <Text>Date: {itemm[0].date}</Text>
          <Text>Day/Night: {Math.random() > 0.5 ? 'Day' : 'Night'}</Text>
          <Text>Location: {itemm[0].location.name}</Text>
          <Text>{Math.floor(Math.random() * 50)} kilometers away</Text>
          <Text style={styles.detailsText}>Details: This is a fantastic hotel...</Text>
          <TouchableOpacity style={styles.bookButton} onPress={() => handleAddToCart(itemm[0])}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: '90%',
    height: '80%',  // Use 80% of the page's height
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '60%',  // Adjust the image height to your preference
    resizeMode: 'cover',
  },
  details: {
    padding: 10,
    flex: 1,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
  },
  detailsText: {
    marginTop: 10,
  },
  bookButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EventMME;

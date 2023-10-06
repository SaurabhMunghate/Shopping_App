import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUpScreen = () => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://source.unsplash.com/300x300/?Sign Up' }} // Replace with your Unsplash image URL
                style={styles.backgroundImage}
            >
                <View style={styles.content}>
                    <Image
                        source={{ uri: 'https://source.unsplash.com/300x300/?face' }} // Replace with your logo image URL
                        style={styles.logo}
                    />
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email (optional)"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="City"
                        value={city}
                        onChangeText={setCity}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="State"
                        value={state}
                        onChangeText={setState}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile Number"
                        keyboardType="phone-pad"
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 10
    },
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        color: 'white',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SignUpScreen;

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Image
                source={{ uri: 'https://source.unsplash.com/300x300/?android' }}
                style={styles.logo}
        
      />
      <Text style={styles.headerText}>Log in or sign up</Text>
      <Text style={styles.subHeaderText}>Welcome to Airbnb</Text>

      <View style={styles.countryContainer}>
        <Text style={styles.countryLabel}>Country/Region</Text>
        <Text style={styles.countryCode}>India (+91)</Text>
      </View>

      <View style={styles.phoneNumberContainer}>
        <Text style={styles.phoneNumberLabel}>Phone number</Text>
        <View style={styles.phoneInputContainer}>
          <Text style={styles.countryCodeInput}>+91</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
        </View>
        <Text style={styles.privacyText}>
          We’ll call or text you to confirm your number.
          Standard message and data rates apply. Privacy Policy
        </Text>
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Icon name="facebook" size={20} color="white" />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Icon name="google" size={20} color="white" />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Icon name="apple" size={20} color="white" />
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Continue with email</Text>
      </TouchableOpacity>

      <Text style={styles.helpText}>Need help?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  countryLabel: {
    marginRight: 10,
  },
  countryCode: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  phoneNumberContainer: {
    marginBottom: 20,
  },
  phoneNumberLabel: {
    marginBottom: 5,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  countryCodeInput: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  privacyText: {
    fontSize: 12,
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#ff5a5f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 15,
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  orText: {
    marginBottom: 15,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  socialButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  emailButton: {
    backgroundColor: '#666',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  emailButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  helpText: {
    fontSize: 14,
    color: '#666',
    textDecorationLine: 'underline',
  },
});

export default LoginPage;

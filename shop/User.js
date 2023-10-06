import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const UserProfile = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bankInfo, setBankInfo] = useState('************1234');
  const [returnAddress, setReturnAddress] = useState('1234 Elm Street, City, Country');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleSaveChanges = () => {
    // Handle saving changes to the user's profile
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      <Image
        source={{ uri: 'https://source.unsplash.com/300x300/?face' }} // Replace with your logo image URL
        style={{
          width: 100,
          height: 100,
          marginBottom: 20,
          borderRadius: 20,
        }}
      />
      <Text style={styles.sectionTitle}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Full Name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
      />

      <Text style={styles.sectionTitle}>Bank Account Info</Text>
      <TextInput
        style={styles.input}
        value={bankInfo}
        onChangeText={setBankInfo}
        placeholder="Bank Account Number"
        secureTextEntry
      />

      <Text style={styles.sectionTitle}>Return Address Info</Text>
      <TextInput
        style={styles.input}
        value={returnAddress}
        onChangeText={setReturnAddress}
        placeholder="Return Address"
      />

      <Text style={styles.sectionTitle}>Change Password</Text>
      <TextInput
        style={styles.input}
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="New Password"
        secureTextEntry
      />

      <Text style={styles.sectionTitle}>Change Email Address</Text>
      <TextInput
        style={styles.input}
        value={newEmail}
        onChangeText={setNewEmail}
        placeholder="New Email Address"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserProfile;

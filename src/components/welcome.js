import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Welcome({ route, navigation }) {
  const user = route.params.user;

  return (
    <View style={styles.container}>
      
      <Image 
        source={{ uri: user.picture.large }} 
        style={styles.image} 
      />

      <Text style={styles.text}>
        {user.name.first} {user.name.last}
      </Text>

      <Text style={styles.text}>{user.email}</Text>
      <Text style={styles.text}>{user.phone}</Text>

      {/* 🔹 NEXT BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Signup", { user })}
      >
        <Text style={styles.buttonText}>Next → Signup</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    margin: 5
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },

  // 🔹 Button Style
  button: {
    marginTop: 20,
    backgroundColor: '#2f667c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
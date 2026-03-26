import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Alert
} from 'react-native';


import AnimatedButton from './AnimatedButton';
import VectorIcon from './VectorIcon';
import { getRandomUsers } from '../api/randomUserApi';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    console.log("Username:", username);
    console.log("Password:", password);

    


    try {
      const users = await getRandomUsers(1);

      if (users.length > 0) {
        const user = users[0];

        Alert.alert(
          "Login Success",
          `Welcome ${user.name.first} ${user.name.last}`
        );

        navigation.navigate("Welcome", { user });
      } else {
        Alert.alert("Error", "No user found");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to fetch user");
    } finally {
      setLoading(false); // ✅ always stop loader
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.card}>

        {/* 🔹 Title */}
        <View style={styles.titleContainer}>
          <VectorIcon name="account-circle" size={50} color='#648294d0' />
          <Text style={styles.title}>Login</Text>
        </View>

        {/* 🔹 Username */}
        <View style={styles.inputBox}>
          <VectorIcon name="account" size={22} color="#777" />
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)} // ✅ FIXED
            style={styles.input}
          />
        </View>

        {/* 🔹 Password */}
        <View style={styles.inputBox}>
          <VectorIcon name="lock" size={22} color="#777" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)} // ✅ FIXED
            style={styles.input}
          />
        </View>

        {/* 🔹 Button */}
        <AnimatedButton
          title="Login"
          onPress={handleLogin}
          loading={loading}
        />

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeef1',
    justifyContent: 'center',
    padding: 20
  },

  card: {
    backgroundColor: '#f7f7f7',
    padding: 25,
    borderRadius: 15,
    elevation: 5,
  },

  titleContainer: {
    alignItems: 'center',
    marginBottom: 25
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ced5d89f',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15
  },

  input: {
    flex: 1,
    padding: 12,
    fontSize: 16
  }
});


































































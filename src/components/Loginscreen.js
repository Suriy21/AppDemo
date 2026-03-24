import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Alert } from 'react-native';

import CustomInput from './CustomInput';
import CustomButton from './Button'; 
import Loader from './Loader';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    // validation
    if (!username || !password) {
      Alert.alert("Error", "Please enter username and password");
      return;
    }

    setLoading(true); 

    // simulate API call
    setTimeout(() => {
      setLoading(false); 

      navigation.navigate('Welcome', { user: username });

    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>

      <CustomInput
        label="Username"
        value={username}
        onChangeText={setUsername}
      />

      <CustomInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* ✅ Custom Button */}
      <CustomButton
        title="Login"
        onPress={handleLogin}
        disabled={loading}
      />

      {/* ✅ Loader */}
      <Loader visible={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
});
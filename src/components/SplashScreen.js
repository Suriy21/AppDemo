import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animation from './Animation.js';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7e9e7',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
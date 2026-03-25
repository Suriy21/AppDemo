import React, { useEffect, useRef } from 'react';
import { Animated, Image, Text, StyleSheet, View } from 'react-native';

export default function Animation() {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>

      {/* Animated Image */}
      <Animated.Image
        source={require('../assets/images.jpg')}
        style={[
          styles.image,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
        resizeMode="contain"
      />

      {/* Animated Text */}
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        My App
      </Animated.Text>

      <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
        Welcome to your app
      </Animated.Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex:1,
    justifyContent: 'center',
  },

  image: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#034146',
  },

  subtitle: {
    fontSize: 14,
    color: '#0e4c5c',
    marginTop: 8,
  },
});
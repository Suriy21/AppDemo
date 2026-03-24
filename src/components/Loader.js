import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

export default function Loader({ visible }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#166b9c" />
      <Text style={styles.text}>Please wait...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
  },
});
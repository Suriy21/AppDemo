import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';

export default function Welcome({ navigation, route }) {
  const username = route.params.user;
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.text}>Welcome</Text>
      <Text style={{color: 'black'}}>{username}</Text>

      <Button
        title=" Next"
        onPress={() => navigation.navigate('Signup')}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e1e5ee'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
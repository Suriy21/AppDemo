import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen({ route }) {
  const user = route.params?.user;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      {user && (
        <Text>{user.name.first} {user.name.last}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 22 }
});
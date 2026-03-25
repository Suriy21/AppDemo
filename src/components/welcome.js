import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View
} from 'react-native';

import AnimatedButton from './AnimatedButton';

export default function Welcome({ route, navigation }) {

  const username = route?.params?.user || "Guest";

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.text}>
        Welcome {username} 🎉
      </Text>

      {/* 🔹 Go to Signup Button */}
      <View style={{ marginTop: 30 }}>
        <AnimatedButton
          title="Next"
          onPress={() => navigation.navigate("Signup")}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
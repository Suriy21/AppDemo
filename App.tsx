import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/components/SplashScreen.js'

// Screens
import LoginScreen from './src/components/Loginscreen';
import Welcome from './src/components/welcome';
import SignupScreen from './src/components/Signup';

const Stack = createStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>

      {/* 🔹 Status Bar */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      {/* 🔹 Navigation */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerStyle: {
               backgroundColor: '#648294d0'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}
        >
          <Stack.Screen 
            name="Splash" 
            component={SplashScreen}
            options={{ headerShown: false }} 
          />
          {/* 🔹 Login */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Login Page' }}
          />

          {/* 🔹 Welcome */}
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ title: 'Welcome' }}
          />

          {/* 🔹 Signup */}
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaProvider>
  );
}

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/components/SplashScreen';
import LoginScreen from './src/components/Loginscreen';
import Welcome from './src/components/welcome';
import SignupScreen from './src/components/Signup';

// ✅ IMPORT DRAWER
import DrawerNavigator from './src/components/DrawerNavigation';

const Stack = createStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">

          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Signup" component={SignupScreen} />

          {/* ✅ MAIN DASHBOARD */}
          <Stack.Screen
            name="Dashboard"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
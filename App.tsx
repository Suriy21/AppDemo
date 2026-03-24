import { StatusBar, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/Loginscreen';
import Welcome from './src/components/welcome.js';
import SignupScreen from './src/components/Signup.js';
const Stack = createStackNavigator();
function AppContent() {
  const safeAreaInsets = useSafeAreaInsets(); 
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: safeAreaInsets.top }}>
      <View style={{ flex: 1 }}>
      </View>
    </SafeAreaView>
  );
}
export default function App() {
  const isDarkMode = useColorScheme() === 'dark'; // ✅ Fixed variable casing
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

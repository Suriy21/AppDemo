import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';

import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import HistoryScreen from '../Screens/HistoryScreen';
import SettingsScreen from '../Screens/SettingScreen';

// ✅ ICON
import VectorIcon from '../components/VectorIcon';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ route }) {
  const user = route?.params?.user;

  return (
    <Drawer.Navigator
      initialRouteName="Home"

      // ✅ FIXED HERE
      screenOptions={({ navigation }) => ({
        drawerActiveTintColor: '#648294',
        drawerLabelStyle: { fontSize: 16 },

        // HEADER STYLE
        headerStyle: { backgroundColor: '#648294' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',

        // HAMBURGER ICON
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 15 }}
          >
            <VectorIcon name="menu" size={28} color="#fff" />
          </TouchableOpacity>
        ),
      })}
    >

      <Drawer.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <VectorIcon name="home" size={size} color={color} />
          )
        }}
      />

      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen}
        initialParams={{ user }}
        options={{
          drawerIcon: ({ color, size }) => (
            <VectorIcon name="account" size={size} color={color} />
          )
        }}
      />

      <Drawer.Screen 
        name="History" 
        component={HistoryScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <VectorIcon name="history" size={size} color={color} />
          )
        }}
      />

      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <VectorIcon name="settings" size={size} color={color} />
          )
        }}+
      />

    </Drawer.Navigator>
  );
}
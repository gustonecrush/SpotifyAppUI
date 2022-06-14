import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNavigator from '../components/BottomNavigator';
import {
  StartupScreen,
  LoginScreen,
  HomeScreen,
  PlaylistScreen,
  SearchScreen,
  MusicPlayerScreen,
  YourLibrary,
  PremiumScreen,
} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Your Library"
        component={YourLibrary}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Premium"
        component={PremiumScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="StartupScreen">
      <Stack.Screen
        name="StartupScreen"
        component={StartupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MusicPlayerScreen"
        component={MusicPlayerScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlaylistScreen"
        component={PlaylistScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});

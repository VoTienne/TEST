import   React,{component} from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, ImageBackground,Image,Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import login from './View/login.js';
import Home from './View/home.js';
import Index from './View/index.js';
export default function App() {
  return (
   
    <Index />
 
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

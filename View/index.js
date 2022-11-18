import React, {component} from "react";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import Login from './login.js';
import Home from './home.js';
import Setting from './setting';
import Profile  from "./profile.js";
import Shop from "./shop.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeTabs = () => {
    return(
      
        <Tab.Navigator 
         
         screenOptions={{
          tabBarStyle:{
            
            
            padding:1,
            borderRadius:15,
            height:60,
            bottom:16,
            right:16,
            left:16,
            position:'absolute'
          },
          tabBarLabelStyle:{
            bottom:5
          },
          tabBarShowLabel:false,
          tabBarActiveTintColor :'#1e90ff',
          headerShown: false}}> 
        <Tab.Screen options={{
              tabBarIcon: ({color,size}) => (
                <Icon name='home' color={color} size={size}/>
              ),
            }} name='Trang chủ' component={Home}/>
        <Tab.Screen options={{
              tabBarIcon: ({color,size}) => (
                <Icon name='cart' color={color} size={size}/>
              ),
            }} name='Giỏ hàng' component={Shop}/>  
              
            
            <Tab.Screen options={{
              tabBarIcon: ({color,size}) => (
                <Icon name='account' color={color} size={size}/>

              ),
            }} name='Cá nhân' component={Profile}/>
            <Tab.Screen options={{
              tabBarIcon: ({color,size}) => (
                <Icon name='wrench' color={color} size={size}/>

              ),
            }} name='Cài đặt' component={Setting}/>
        </Tab.Navigator>
    );
}
export default Index = () => {
    return(
        
        //<Login />
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='HomeTabs' component={HomeTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
     
    ); 
}
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground,Image,Dimensions, TextInput, TouchableOpacity } from 'react-native';
//import Rootcomponent from './View/index.js';
import Home from './home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default Login = ({navigation}) => {
  const isValidationOK = () => Email.length > 0 && Password.length > 0
                            && IsValidEmail == true
                            && IsValidPassword == true
  const [Email,onchangeEmail]=useState('');
  const [IsValidEmail,setValidEmail] = useState('true');
  const [Password,onchangePassword] = useState('');
  const [IsValidPassword,SetValidPassword] = useState('true');
  const verifyEmail = (Email) => {
    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(regex.test(Email)) {
    return true;
  }
  return false;

  }
  const verifyPassword = (Password) => {
    let regex = new RegExp(/(?=.{5,})/);
    if(regex.test(Password)) {
    return true;
  }
  return false;
  }

  return (
    <View style={styles.container}>
     <ImageBackground style={{height:'100%',width:'100%'}}  source={require('../img/geometry-background.png')}>

<View style={{flex:1}}>
  <View style={{height:'30%',width:'100%',marginTop: 0.3*windowHeight,justifyContent:'center',alignItems:'center',}}>
  <TextInput 
  onChangeText={(text)=>{
    onchangeEmail(text);
    const isvalid = verifyEmail(text);
    isvalid? setValidEmail(true): setValidEmail(false);
  }}
  value={Email}
  placeholderTextColor='white' autoCapitalize='none' placeholder='Email' style={{height:50,width:'70%',borderBottomColor:'white',borderBottomWidth:2,bottom:10}}/>
  <Text style={{color:'red',right:75,fontSize:15,fontWeight:'bold'}}>{IsValidEmail? '': 'Email is invalid !'}</Text>
  <TextInput 
  onChangeText={(text)=>{
    onchangePassword(text);
    const isvalid = verifyPassword(text);
    isvalid? SetValidPassword(true): SetValidPassword(false);
  }}
  value={Password}
  keyboardType='numeric' secureTextEntry={true} placeholderTextColor='white' autoCapitalize='none' placeholder='Password' style={{height:50,width:'70%',borderBottomColor:'white',borderBottomWidth:2,marginTop:10}}/>
  <Text style={{color:'red',top:10,left:5,fontSize:15,fontWeight:'bold'}}>{IsValidPassword?'': '	Password must be at leats five numbers !'}</Text>
  <View style={{alignItems:'center', width:'90%',height:60,top:40}}>
<TouchableOpacity 
  onPress={() => {
navigation.navigate('HomeTabs');
}} 
disabled = {isValidationOK () == false}
  style={{
  shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 2,
},
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 6, borderRadius:30, width:'60%',height:'100%', backgroundColor:isValidationOK()==true?'#1e90ff':'rgb(0,0,0,0.6)',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontWeight:'bold',fontSize:15, color:'white',}}> Sign in</Text>
</TouchableOpacity>
<View style={{width:'100%',height:30,top:30,flexDirection:'row',justifyContent:'space-between'}}>
<TouchableOpacity 
onPress={() => {
  navigation.navigate('Signup');
}}

style={{height:'100%',width:'35%',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontWeight:'bold',color:'white',}}>Sign Up</Text>
</TouchableOpacity>
<TouchableOpacity style={{height:'100%',width:'35%',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontWeight:'bold',color:'white',}}>Forgot Password ?</Text>
</TouchableOpacity>
</View>


  </View>
  </View>
  </View>
  
  


      <StatusBar style="light" />
      </ImageBackground>
    </View>
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

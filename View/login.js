import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground,Image,Dimensions, TextInput, TouchableOpacity } from 'react-native';
//import Rootcomponent from './View/index.js';
import Home from './home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default Login = ({navigation}) => {
  return (
    <View style={styles.container}>
     <ImageBackground style={{height:'100%',width:'100%'}}  source={require('../img/geometry-background.png')}>

<View style={{flex:1}}>
  <View style={{height:'30%',width:'100%',marginTop: 0.3*windowHeight,justifyContent:'center',alignItems:'center',}}>
  <TextInput placeholderTextColor='white' autoCapitalize='none' placeholder='Email' style={{height:50,width:'70%',borderBottomColor:'white',borderBottomWidth:2,}}/>
  <TextInput keyboardType='num1231eric' secureTextEntry={true} placeholderTextColor='white' autoCapitalize='none' placeholder='Password' style={{height:50,width:'70%',borderBottomColor:'white',borderBottomWidth:2,marginTop:10}}/>
  <View style={{alignItems:'center', width:'90%',height:60,top:40}}>
<TouchableOpacity 
  onPress={() => {
navigation.navigate('HomeTabs');
}} 
  style={{
  shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 2,
},
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 6, borderRadius:30, width:'60%',height:'100%', backgroundColor:'#1e90ff',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontWeight:'bold',fontSize:15, color:'white',}}> Sign in</Text>
</TouchableOpacity>
<View style={{width:'100%',height:30,top:30,flexDirection:'row',justifyContent:'space-between'}}>
<TouchableOpacity 

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

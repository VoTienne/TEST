import React, {Component} from "react";
import { View,Text, } from "react-native";
import { TextInput } from "react-native-gesture-handler";
export default Signup = () =>{
    return(


<View style={{height:'100%',width:'100%', flex:1,alignItems:'center',marginTop:100,borderWidth:1,borderColor:'red'}} ><Text style={{color:'#1e90ff' ,fontSize:50,fontWeight:'bold'}}>Sign Up</Text>
<View style={{ justifyContent:'space-between' ,alignItems:'center', height:'35%',width:'90%',borderWidth:1,top:50}}>
    <TextInput style={{marginTop:10 , borderRadius:50, height:'25%',width:'90%',borderWidth:1}}>
    
    </TextInput>
    <TextInput style={{marginTop:10 , borderRadius:50, height:'25%',width:'90%',borderWidth:1}}>

    </TextInput>
    <TextInput style={{marginTop:10 , borderRadius:50, height:'25%',width:'90%',borderWidth:1}}>

</TextInput>
</View>

</View>
    );
}
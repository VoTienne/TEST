import React,{Component} from "react";
import { Button, Text,View } from "react-native";
export default Profile = ({navigation}) => {
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <Button
           title="logout"
           onPress={()=>navigation.popToTop()}
           />
           
          
          
        </View>

    );
}
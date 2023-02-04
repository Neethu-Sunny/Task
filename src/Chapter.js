import React,{Component} from "react";


import{
    View,
    StyleSheet,
    TextInput
    
    
}from "react-native";
import { SearchBar } from "react-native-screens";

export default class  Chapter extends Component{
   
    render(){
        return(
            <View style={styles.container}>
             
               
           
            <TextInput style={styles.inputview} placeholder="Vedios" placeholderTextColor={'blue'}></TextInput> 
            
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:
    {
        height:'100%',
        width:'100%',
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
   
   inputview:
   {
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center'
   }
   
})

import React,{Component} from "react";
import { Searchbar } from 'react-native-paper';


import{
    View,
    StyleSheet
    
   
}from "react-native";

const GetSearch=() => {
   
    return(
        <View style={styles.container}>
           
         <Searchbar
          round
          searchIcon={{size: 24}}         
          placeholder="Search for service..."
          
        /> 
        </View>
    )
    
}
const styles=StyleSheet.create({
    container:
    {
        width:'100%',
        height:50,
        backgroundColor:'#f7f3f3',
        borderRadius:9,
        borderWidth:1,     
        //marginTop:StatusBar.currentHeight,
        paddingHorizontal:15,
        justifyContent:'center'
        
    },
    inputview:{
        width:'100%',
        height:'100%',
        paddingLeft:8,
        fontSize:16
    }
    
})
export default GetSearch;
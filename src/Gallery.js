import React,{Component} from "react";


import{
    View,
    StyleSheet,
    TextInput
    
}from "react-native";

export default class  Gallery extends Component{
   
    render(){
        return(
            <View style={styles.container}>
            <TextInput style={styles.inputview} placeholder="Vedios" placeholderTextColor={'black'}></TextInput> 
            
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
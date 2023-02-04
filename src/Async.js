import React,{Component} from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import{
    View,
    StyleSheet,
     Text,
     FlatList,
     Image,
     TouchableOpacity,
     TextInput,
     Button
  
}from "react-native";

const Asych=()=>{
    const [textInputValue,settextInputValue]=useState('');
    const [value,setValue]=useState('');
    const saveValue=()=>{
     if(textInputValue){
        AsyncStorage.setItem('any_value',textInputValue)
        settextInputValue('');
        alert('Data saved')
     }
     else{
        alert('Please fill data')
     }
    }
    const getValue=()=>{
        AsyncStorage.getItem('any_value')
        .then((value)=>{
            setValue(value);
        })
    }
    return(       
        <View stye={{flex:1}}>
            <View style={styles.container}>
            <View>
            <TextInput style={{width:210,height:90,
                borderColor:'blue',
                borderWidth:1,
                marginLeft:90,
                marginTop:80}} 
                placeholder="Entrer Text here.." textAlign="center"
                value={textInputValue}
                onChangeText={(data)=>settextInputValue(data)}
                 >

            </TextInput>
            <TouchableOpacity style={{backgroundColor:'blue',width:40,height:40,minWidth:250,marginLeft:70,marginTop:40}}
             onPress={saveValue} >
                <Text style={{textAlign:'center',marginTop:10,fontSize:16,fontWeight:'bold',color:'white'}}>Save Data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'blue',width:40,height:40,minWidth:250,marginLeft:70,marginTop:40}}
             onPress={getValue}>
                <Text style={{textAlign:'center',marginTop:10,fontSize:16,fontWeight:'bold',color:'white'}}>Get Data</Text>
            </TouchableOpacity>
            
            <Text style={{padding:10,textAlign:'center',fontSize:22,color:'black'}}>{value}</Text>
    
            </View>
            </View>

        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'white',       
       height:'100%'
    
    },
    buttonview:{
        width:40,
        height:30
    }

})

export default Asych;

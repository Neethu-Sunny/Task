import React,{Component} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';



 import{
    View,
    StyleSheet,
     Text,
     FlatList,
     Image,
     TouchableOpacity,
     SafeAreaView
  
}from "react-native";
import { State } from "react-native-gesture-handler";
import { removeItemFromcart } from "./Actions";



const Cartproducts =()=>{
    const navigation=useNavigation();
    const items=useSelector(State=>State)
    const dispatch=useDispatch();
    const removeItem=(index)=>{
        dispatch(removeItemFromcart(index))
    }
    let removeitems=[];
    removeitems=items;
       return(
           <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
              <View style={{width:'100%',
                height:70,
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row'}}>
                <TouchableOpacity style={{paddingLeft:20,
                height:20,
                justifyContent:'center',
                alignItems:'center',
                marginLeft:15}}
                onPress={()=>{
                    navigation.goBack();
                }}>
                <Text style={{fontWeight:'700',fontSize:20}}>Back</Text>
                </TouchableOpacity>
             </View>
             <FlatList data={items}
             renderItem={({item,index})=>{
                return(
                       
                    
                    <View style={{width:'94%',backgroundColor:'#fff',height:120,alignSelf:'center',marginTop:10,borderRadius:10,elevation:1,flexDirection:'row',paddingLeft:10,alignItems:'center'}}>
                   <Image source={{uri:item.image}}
                     style={{width:100,height:100,borderRadius:10}}/>
                     <View>
                        <Text style={{fontSize:16,color:'#000',fontWeight:'600',paddingLeft:10}}>{item.name}</Text>
                        <Text style={{fontSize:16,color:'#000',fontWeight:'600',paddingLeft:10}}>{item.auth}</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity style={{backgroundColor:'red',borderRadius:10,height:30,justifyContent:'center',alignItems:'center',paddingLeft:10,paddingRight:10}}
                        onPress={()=>{
                            removeItem(index);
                        }}>
                        <Text style={{color:'#fff'}}>Remove</Text>                        
                        </TouchableOpacity>                                                
                       </View>                        
                     </View>
                   
                    </View>
                )
            }
        }/>
             
            </View>
           </SafeAreaView>
       );
   };


export default Cartproducts;
import React,{Component} from "react";
import {useDispatch} from 'react-native-redux';
import {useNavigation} from '@react-navigation/native';
import { addItemToCart } from "./Actions";


 import{
    View,
    StyleSheet,
     Text,
     FlatList,
     Image,
     TouchableOpacity
  
}from "react-native";
const items = [
    {
      id: 0,
      image:'https://m.media-amazon.com/images/I/515Y-kC7EQL._SX310_BO1,204,203,200_.jpg',
      name: 'The blue umbrella',
      auth:'by Ruskin Bond'
        
    },
    {
      id: 1,
      image: 'https://m.media-amazon.com/images/I/51wbVQTpTgL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
      name: 'Wings of fire',
      auth:'by Abdul Kalam'
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/41w4taXmXXL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        name: 'My Gita',
        auth:'by Devdutt Pattanaik' 
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/I/41DtlpIDn0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        name: 'Malgudi Days',
        auth:'by R.K.Narayan' 
    }
     
  ];
  const renderItem = ({item})=>(
    <Item name={item.image}/>
    );
const Myproducts =()=>{
     const navigation=useNavigation();
     const dispatch=useDispatch();
     const addItem=(item)=>{
     dispatch(addItemToCart(item))
     }
        return(
            <View style={{flex:1}}>
            <View style={styles.container}>
             <Text style={{color:'#000',fontSize:16,fontWeight:'700'}}>Books</Text>
             <TouchableOpacity
                style={{width:100,
                height:40,
                borderRadius:20,
                backgroundColor:'b3ffd9',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'row',
                marginRight:20
                }}
                onPress={()=>{
                    navigation.navigate('Cart');
                }}>
                <Image source={require('../assets/bag.png')}
                style={{width:24,height:24}}/>    
                <Text>{'0'}</Text>
             </TouchableOpacity>
            </View>
            <FlatList data={items} renderItem={({item,index})=>{
                return(
                    <View style={{width:'94%',backgroundColor:'#fff',height:120,alignSelf:'center',marginTop:10,borderRadius:10,elevation:1,flexDirection:'row',paddingLeft:10,alignItems:'center'}}>
                    <Image source={{uri:item.image}}
                     style={{width:100,height:100,borderRadius:10}}/>
                     <View>
                        <Text style={{fontSize:16,color:'#000',fontWeight:'600',paddingLeft:10}}>{item.name}</Text>
                        <Text style={{fontSize:16,color:'#000',fontWeight:'600',paddingLeft:10}}>{item.auth}</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity style={{backgroundColor:'green',borderRadius:10,height:30,justifyContent:'center',alignItems:'center',paddingLeft:10,paddingRight:10}}
                        onPress={()=>{
                            addItem(item);
                        }}>
                        <Text style={{color:'#fff'}}>Add+</Text>
                        </TouchableOpacity>
                        </View>
                     </View>
                    </View>
                )
            }
        }/>
            </View>
        )
    }

const styles=StyleSheet.create({
    container:{
     width:'100%',
     height:60,
     flexDirection:'row',
     alignItems:'center',
     paddingLeft:20,
     backgroundColor:'#fff',
     elevation:1
    }
})
export default Myproducts;
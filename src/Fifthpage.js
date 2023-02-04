import React,{Component} from "react";
import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';

import{
    View,
    StyleSheet,
    TextInput,
    Image,
    SafeAreaView,
    TouchableHighlight,
    Text,
    Button,
    TouchableOpacity
  
}from "react-native";


const stack=createStackNavigator();

export default class Fifthpage  extends Component{
   
    
    render(){
    
        return(
            <View style={styles.container}>
           <View style={styles.viewimage}>
           <Text style={{color:'black',fontSize:15}}>Images/IIIustrations</Text>
           </View>
           <View style={styles.Viewsecondimage}>
          
            <Text style={{color:'black',fontSize:15,justifyContent:'center',textAlign:'center',marginTop:'30%',fontSize:20,fontWeight:'bold'}}>App tour title</Text>
            <Text style={{color:'gray',fontSize:15,marginLeft:90,marginTop:'3%'}}>The app tour description goes here.</Text>
            <TouchableOpacity   onPress= {()=>this.props.navigation.navigate('Flexbox')}>
            <View style={styles.rectangle}>
            <Image style={styles.imageview} source={require('../assets/next.png')}/>
            </View> 
            
            </TouchableOpacity>
            
           </View>
            </View>
          
           
        )
    }
}

const styles=StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:'white'
        
    },
    viewimage:{
        flex:1,
        backgroundColor:'#c2d6d6',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:6,
        marginLeft:10,
        marginRight:10

    }, 
    Viewsecondimage:{
        flex:1,
        backgroundColor:'white'
    } ,
   safeArea: {
    flex: 1,
    backgroundColor: 'gray',  
    borderRadius:20
    
  },
   fixBackground: {
    //backgroundColor: 'orange',
    position: 'absolute',
    bottom: '60%',
    right: 0,
    left: 0,
    height: 280
    
    //zIndex: -1000,
    
  },
  imageview:
  {
   width:'100%',
   height:'100%',
   justifyContent:'center',
   alignItems:'center',
   marginLeft:'-1%',
   marginBottom:'70%'
   
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  rectangle: {
    height: 128,
    width: 128,
    backgroundColor: 'white',
    //position: 'absolute', 
   // zIndex: 99,
    top: '50%',
    left: '40%',
    borderColor:'gray',
    borderWidth:2,
    marginBottom:'-20%',
    borderRadius:4
    
  }
})

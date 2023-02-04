import React,{Component} from "react";
import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';


import{
    View,
    StyleSheet,
    TextInput,
    Image,
    SafeAreaView,
    TouchableHighlight,
    Text,
    Button
    
  
}from "react-native";


const stack=createStackNavigator();



export default class  Resources extends Component{
   
    render(){
        return(
            <View style={styles.container}>
            <Image style={styles.imageview} source={require('../assets/inmakes.png')}/>
            <View style={styles.inputView}>
            <TextInput style={styles.textedit}  placeholder="Enter your mobile number"  placeholderTextColor={'black'}></TextInput>
            <TextInput  placeholder="We will send you an OTP to verify"   placeholderTextColor={'gray'}></TextInput>
            </View>
            <View style={styles.fixBackground}>
                
            <SafeAreaView style={styles.safeArea}>
            <View style={styles.row}>
            <TextInput
          style={styles.textView}
         
          placeholder="+91" placeholderTextColor={'white'} />
            <TextInput style={styles.MobView} placeholder="Mobile number"  placeholderTextColor={'gray'}>
            
            </TextInput>
            </View>
            <View style={{ width:'90%',marginLeft:20,marginBottom:30}}>
            <Button  title="Continue"
            onPress= {()=>this.props.navigation.navigate('Secondpage')}/> 
             
            </View>
            </SafeAreaView>
            
            </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:
    {
        height:'100%',
        width:'100%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
   
   imageview:
   {
    width:'70%',
    height:'20%',
    justifyContent:'center',
    alignItems:'center'
    
   },
   inputView:
   {
    height:'60%',
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'10%'
    
   },
   safeArea: {
    flex: 1,
    backgroundColor: '#073b4c',  
    borderRadius:20
    
  },
   fixBackground: {
    //backgroundColor: 'orange',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 160
    //zIndex: -1000,
    
  },
  textView:{
    height: 60,
    width:60,
    margin: 12,
    borderWidth: 1,
   //padding: 30, 
    borderRadius:6,
    backgroundColor:'#173F5F',
    borderColor:'gray',
    textAlign:'center'
    
    
  },
  MobView:{
    height: 60,
    width:'70%',
    margin: 12,
    borderWidth: 1,
    //padding: 30, 
    borderRadius:6,
    backgroundColor:'#173F5F',  
    borderColor:'gray',
    textAlign:'center'  
  },
  row: {
    flex: 1,
    flexDirection: "row",
    
  },
  buttonview:{
    width:'90%',
    height:'79%',
    backgroundColor:'green',
    marginLeft:20,
    marginBottom:-60,
    borderRadius:8,
    borderColor:'black'
   },
   textedit:{
    fontWeight:'bold',
    width:'110%',
    fontSize:20,
    marginLeft:40
   }
   
  
})

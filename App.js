import React,{Component} from "react";
import {
  View,
   StyleSheet,
   ImageBackground,
   Image,
   Text,
   TextInput,
   TouchableHighlight
   
}from 'react-native'

class Registerhome extends Component{
  render(){
    return(
      <View>
        <Text style={styles.textView}>Welcome {this.props.name}</Text>
      </View>
    )
  }
}
export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={require('./assets/bg.jpg')}
        style={styles.backgroundImage}>
          <Image source={require('./assets/avatarnew.png')}
        style={styles.logo}>

          </Image>
          <Registerhome name = 'to react native'>

          </Registerhome>
         <TextInput style={styles.inputView}
           placeholder='Name' placeholderTextColor='blue'
           maxLength={10}>         
           </TextInput>
           <TextInput style={styles.inputView}
           placeholder='Email' placeholderTextColor='blue'>      
           </TextInput>
           <TextInput style={styles.inputView}
           placeholder='Password' placeholderTextColor='blue'
           secureTextEntry={true}></TextInput>
           <View style={{flexDirection:'row'}}>
           <TextInput style={styles.textMob}
           placeholder='Mob' placeholderTextColor='blue' keyboardType='phone-pad'>
            
         </TextInput>
          <TextInput style={styles.textMobno}
         
           placeholder='enter phone no' placeholderTextColor='blue' maxLength={10} keyboardType='phone-pad'>
          </TextInput>
           </View>
           <TouchableHighlight style={styles.buttonView}
           underlayColor='red'>
           
            <Text style={styles.buttonText}>Register</Text>
           </TouchableHighlight>
         
        </ImageBackground>
      </View>
     
    )
  }
}
  

const styles=StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    //flex:2,
    backgroundColor:'#ffffff',
    
  },

  backgroundImage:{
    height:'100%',
    width:'100%',
    //flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  logo:
  {
    height:100,
    width:100,
    backgroundColor:'red'
  },
  inputView: {
    width:'80%',
    height:55,
    //backgroundColor:'red',
    borderWidth:1,
    borderColor:'black',
    marginTop:20,
    paddingLeft:20,
  },
  textMob:{
    width:'10%',
    height:55,
    borderWidth:1,
    borderColor:'black',
    marginTop:20,
    marginRight:20
     
  },
  textMobno:{
    width:'60%',
    height:55,
    borderWidth:1,
    borderColor:'black',
    marginTop:20,
    marginLeft:20
     
  },
  buttonView:{
    width:'60%',
    height:55,
    backgroundColor:'green',
    marginTop:30,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center',
    
  },
  buttonText: {
    fontSize:22,
    fontWeight:'bold',
    color:'white',
  },
  textView: {
    fontSize:20,
    fontWeight:'bold',
  },
})

  

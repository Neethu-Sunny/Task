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



export default class  Secondpage extends Component{
   
    render(){
        return(
            <View style={styles.container}>
            <Image style={styles.imageview} source={require('../assets/inmakes.png')}/>
            <View style={styles.Imageiconview}>
            <Image  source={require('../assets/inmakesicon.png')}/>
            </View>
            <View style={styles.inputView}>
            <TextInput style={styles.textedit}  placeholder="Verification code"  placeholderTextColor={'black'}></TextInput>
            <TextInput style={{width:'120%'}}  placeholder="Please type the verification code sent to"   placeholderTextColor={'gray'}></TextInput>
            <TextInput style={{marginBottom:'80%'}}   placeholder="+919446393217"  placeholderTextColor={'black'}></TextInput>
            </View>
            <View style={styles.fixBackground}>
                
            <SafeAreaView style={styles.safeArea}>
            <View style={styles.row}>
            <TextInput
          style={styles.textView} />
           <TextInput
          style={styles.textView} />
          <TextInput
          style={styles.textView} />
          <TextInput
          style={styles.textView} />
          <TextInput
          style={styles.textView} />
          
            </View>
            <View style={{ width:'90%',marginLeft:20,marginBottom:20}}>
            <Button  title="Resend otp"
            onPress= {()=>this.props.navigation.navigate('Thirdpage')}/> 
            <TextInput style={{marginBottom:'-10%',marginLeft:140}}  placeholder="Resend after 28s"  placeholderTextColor={'gray'}></TextInput>
           
            </View>
            <View style={{marginLeft:'40%'}}>
           
            <TextInput style={{fontWeight:'bold',fontSize:20}} placeholder="Contact Us"  placeholderTextColor={'green'} ></TextInput>
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
   Imageiconview:{
    width:'70%',
    height:'20%',
    justifyContent:'center',
    alignItems:'center',
   
   },
   Imagephoneview:{
    width:'30%',
    height:'30%',
  
   
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
    height: 200
    
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
    justifyContent:'center',

  },
  buttonview:{
    width:'90%',
    height:'79%',
    marginLeft:20,
    marginBottom:-60,
    borderRadius:8,
    borderColor:'black',
    backgroundColor: '#DDDDDD',
   },
   textedit:{
    fontWeight:'bold',
    width:'110%',
    fontSize:20,
    marginLeft:80,
    
   }
   
  
})

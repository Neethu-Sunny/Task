import React,{Component} from "react";
import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import Icons from 'react-native-vector-icons/MaterialIcons';
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

export default class  Fourthpage extends Component{
   
    render(){
    
        return(
            <View style={styles.container}>
            
            <Image style={styles.imageview} source={require('../assets/inmakes.png')}/>
            <View style={styles.Imageiconview}>
            <Image  source={require('../assets/inmakesicon.png')}/>
           
            </View>
            
            <View style={styles.inputView}>
            
            <TextInput style={{marginBottom:'150%',fontSize:20}}   placeholder="Select your school board"  placeholderTextColor={'black'}></TextInput>     
            </View>
            <View style={styles.fixBackground}>
                
            <SafeAreaView style=   {styles.safeArea}>
            <View style={styles.row}>
          
            <Dropdown style={styles.dropdownview}
            label='Select board'                
            width='40%'
            height='40%'
            fontSize={20}
            icon='chevron-down'
            
           />
           <Dropdown style={styles.dropdownview}
            label='Select class'                
            width='40%'
            height='40%'
            fontSize={20}
            icon='chevron-down'
            borderColor='white'
           />
            
            </View>  
                     
            <View style={{ width:'90%',marginLeft:20,marginBottom:20}}>
            <Button  title="Continue"
            onPress= {()=>this.props.navigation.navigate('Fifthpage')}/> 
      
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
    height: 280
    
    //zIndex: -1000,
    
  },
  textView:{
    height: 60,
    width:'90%',
    margin: 12,
    borderWidth: 1,
   //padding: 30, 
    borderRadius:6,
    backgroundColor:'#173F5F',
    borderColor:'gray',
    paddingLeft:20

    
    
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
    flexDirection: "column",
    justifyContent:'space-evenly'
   
    
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
    fontSize:30,
    marginLeft:80,
    marginTop:'40%'
   },
   dropdownview:{
    height:60,
    width:'90%',
    borderRadius:6,
    backgroundColor:'#173F5F',   
    marginLeft:15,
    borderColor:'white',
    borderWidth: 0.6
    
   }
    
})

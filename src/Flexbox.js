import React,{Component} from "react";


import{
    View,
    StyleSheet,
    TouchableHighlight,
    Text,
    TextInput
    
    
}from "react-native";
export default class  Flexbox extends Component{
    constructor(){
        super();
        this.state={
        name:null
        }
    }
    updatevalue(Username){
        this.setState({name:Username})
        
    }
    render(){
        return(
            <View style={styles.container}>   
            <TextInput style={styles.inputview} placeholder="Username" placeholderTextColor={'blue'}
             onChangeText={(Username)=>this.updatevalue(Username)}></TextInput> 
           <TouchableHighlight style={styles.buttonview}
           onPress={()=>this.props.navigation.navigate('src',{Username:this.state.name})}>
             <Text>Login</Text>
           </TouchableHighlight>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:
    {
        height:'100%',
        width:'100%',
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
   buttonview:{
    width:90,
    height:60,
    backgroundColor:'green',
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

import React,{Component} from "react";
import axios from "axios";

import{
    View,
    StyleSheet,  
    ActivityIndicator,
    FlatList,
    Text
    
    
}from "react-native";


export default class  QNbank extends Component{
    constructor(){
        super();
        this.state={
            loader:false,
            DATA:[]
        }
    }
   getData(){
    this.setState({loader:true})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((response)=>{
       if(response.length>0)
        {
           this.setState({DATA:response})
           
        }
      
        this.setState({loader:false})
        console.log('your response is:',response)
    })
    .catch((error)=>{
        this.setState({loader:false})
        console.log('error is:',error)
    })
   }
   getAxiosData(){
    this.setState({loader:true})
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        this.setState({loader:false})
        console.log('axios response',response)
    })
    .catch((error)=>{
        this.setState({loader:false})
        console.log('axios error',error)
    })
    
   }
   componentDidMount(){
   // this.getData()
     
   }
    render(){
        const renderItem=({item})=>(
            <View style={styles.itemcontainer}>
            <Text>{item.address.company}</Text>
            <Text>{item.website}</Text>
            </View>
        )
        return(
            <View style={styles.container}>
                <ActivityIndicator size='large' color='red' animating={this.state.loader}/>
           <Text style={styles.inputview} onPress={()=>this.getData()}>Hi this is cities</Text>
             <FlatList style={{width:'95%',marginTop:10}}
             data={this.state.DATA}
             renderItem={renderItem}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:
    {
        height:'100%',
        width:'100%',
        //flex:1,
        backgroundColor:'#eeeeee',
        justifyContent:'center',
        alignItems:'center'
       
    },
   
   inputview:
   {
   fontSize:20,
   fontWeight:'bold',
   color:'#000'
   },
   itemcontainer:{
    width:'100%',
    padding:10,
    backgroundColor:'white',
    elevation:4
    
   }
 
})

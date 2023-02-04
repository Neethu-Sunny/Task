import React,{Component} from "react";
import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { RadioButton } from 'react-native-paper';
import ProgressBar from 'react-native-progress/Bar';
import Icon from 'react-native-vector-icons/FontAwesome'


import{
    View,
    StyleSheet,
    TextInput,
    Image,
    SafeAreaView,
    TouchableHighlight,
    Text,
    Button,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    SectionList,
    Dimensions
  
}from "react-native";


const stack=createStackNavigator();
const ANIMAL_NAMES = [
  {
    id: 1,
    name: 'Target live classes',
    description:'By best teachers',
    value:'Book free class'
  },
  {
    id: 2,
    name: 'Avail free online counselling session',
    description:'By carrier experts',
    value:'Schedule a call'
  },
   
];
const Item = ({name,description,value}) => {
  return(
  <View style={styles.item}>
  <Text style={{color: 'white',fontSize:20,marginLeft:-30}}>{name}</Text>
  <Text style={{color: 'black',fontSize:20,marginLeft:-180,marginTop:120}}>{description}</Text>
  
  <View style={{marginTop:-210,marginLeft:-220}}>
  <Icon name="circle" size={80} color='#051a36'/>
  </View>
  <View style={{marginBottom:-210,marginLeft:-130}}>
  <TouchableOpacity style={styles.buttonflat}>
    <Text style={{fontSize:20,color:'white'}}>{value}</Text>
  </TouchableOpacity>
      </View>
  </View>
 
  );
  }
const renderItem = ({item})=>(
  <Item name={item.name} description={item.description} value={item.value}/>
  );
  const { width, height } = Dimensions.get('window');
  const ItemSeparatorView = () => {
    return (
        // Flat List Item Separator
        <View
            style={{
                height: 0.5,
                width: '100%',
                backgroundColor: '#C8C8C8',
            }}
        />
    );
};
export default class Sixthpage  extends Component{
   
    
    render(){
    
        return(
          <View style={styles.container}>
           <View style={styles.viewimage}>
          
           <Image style={styles.inmakesview} source={require('../assets/inmakes.png')}/>
           
           <TouchableOpacity style={styles.buttonview}>
           
           <Image style={styles.imageview} source={require('../assets/circle.png')}/>
           <Text style={{marginBottom:20,marginLeft:40,justifyContent:'center',alignItems:'center'}}>Classes</Text>
            </TouchableOpacity> 
                  
           </View>
           <View style={styles.Viewsecondimage}>  
           <Text style={{marginLeft:20,marginTop:7,fontSize:18,fontWeight:'800'}}>Goodmorning</Text>  
           <Text style={{marginLeft:20,marginTop:3,fontSize:30,fontWeight:'bold',color:'black'}}>Aaron Taylor</Text> 
           <TouchableOpacity style={styles.buttondrop}>
           
           <Image style={styles.imagedrop} source={require('../assets/imgdrops.jpg')}/>
           <Text style={{marginTop:-40,marginLeft:'-50%',color:'white',alignContent:'space-between'}}>Class Plus two science
           <Icon name="chevron-down" size={20} style={styles.arrowview}/>
           </Text>
          
            </TouchableOpacity> 
            <View style={styles.row}>
            <TouchableOpacity style={styles.buttonz}>
           
           <Image style={styles.imageview} source={require('../assets/circle.png')}/>
           <Text style={{marginBottom:10,marginLeft:40,justifyContent:'center',alignItems:'center',color:'black'}}>Biology</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.buttonz}>
           
           <Image style={styles.imageview} source={require('../assets/circle.png')}/>
           <Text style={{marginBottom:10,marginLeft:40,justifyContent:'center',alignItems:'center',color:'black'}}>Physics</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.buttonz}>
           
           <Image style={styles.imageview} source={require('../assets/circle.png')}/>
           <Text style={{marginBottom:10,marginLeft:40,justifyContent:'center',alignItems:'center',color:'black'}}>Chemistry</Text>
            </TouchableOpacity> 
            
            <ImageBackground style={styles.imagecorona} source={require('../assets/corona.jpg')} >
            <Icon name="play-circle-o" size={40} style={styles.iconview}/>
            <ProgressBar width={200} height={2} marginBottom={40} progress={0.6}></ProgressBar> 
            </ImageBackground>           
            <ImageBackground style={styles.treeview}  source={require('../assets/tree.jpg')}>
            <Icon name="play-circle-o" size={40} style={styles.iconview}/>
            <ProgressBar width={190} height={2} marginBottom={40} progress={0.6}></ProgressBar> 
            </ImageBackground>           
           </View>
                    
           </View>
           <View style={styles.containernew}>
           
           <FlatList 
          data={ANIMAL_NAMES}
          horizontal={true}
          
          keyExtractor={item => item.id}
            //ItemSeparatorComponent={ItemSeparatorView}
            renderItem={renderItem }
            
            />
             
           </View> 
            </View>          
        )
    }
}

const styles=StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:'white' ,
        position:'relative',
       
        //width: width * 0.8, // 80% of screen's width
        //height: height * 0.2 // 20% of screen's height 
         
    },
    viewimage:{
        flex:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:6,
        marginLeft:10,
        marginRight:10,
        borderBottomColor:'gray',
        borderBottomWidth: 1,
        
        
  
    }, 
    Viewsecondimage:{
        flex:10,
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
   width:'30%',
   height:'90%',
   justifyContent:'center',
   alignItems:'center',
   marginLeft:'-60%',
   marginBottom:'-30%'
   
  },
  buttonview: {
    width:'30%',
    height:60,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    marginRight:-240,
    borderColor:'green',
    marginBottom:90,
    alignSelf: 'flex-end',
    position: 'absolute',
   borderRadius:8
    
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
    
  },
  inmakesview:{
    marginTop:-10,
    width:'40%',
    height:'60%',
    marginLeft:-140,
    //alignSelf: 'flex-start',
    //position: 'absolute',
  
  },
  dropdownview:{
    height:80,
    width:'90%',
    borderRadius:6,
    backgroundColor:'#173F5F',   
    marginLeft:15,
    borderColor:'white',
    borderWidth: 0.6,
    marginTop:40
   
   },
   buttondrop: {
    width:'85%',
    height:60,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    marginLeft:20,
    borderColor:'green',
    marginTop:4,
    borderRadius:6
    
  },
  imagedrop:
  {
   width:'110%',
   height:60,
   marginTop:-20
  
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    position:'relative'
  },
  buttonrows:{
    width:'30%',
    height:60,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    marginLeft:40,
    borderColor:'green',
    
  },
  buttonz:{
    width:'30%',
    height:60,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    marginLeft:10,
    borderColor:'black',
    marginTop:6,
    borderRadius:8
  },
  imagecorona:
  {
   width:'70%',
   height:'120%', 
   marginLeft:'-100%',
   marginTop:'17%'   
  },
  iconview:{
   marginLeft:10,
   marginTop:30, 
   color:'white'
  },
  treeview:
  {
    width:'70%',
    height:'120%',
    marginTop:70,
    marginLeft:'-17%'
   
  },
  bgview:{
    flexDirection:'row'
  },
  arrowview:{
   marginLeft:70
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },

  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
  containernew: {
    //flex: 1,
    marginTop:100,
   
 },
 item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 40,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    height:300,
    backgroundColor: '#173F5F',
    borderRadius:13,
    width:200,
    
 },
 imageView: {
 
  width: '50%',
  height: 100 ,
  margin: 7,
  borderRadius : 7

},

textView: {

  width:'50%', 
  textAlignVertical:'center',
  //padding:10,
  color: '#000',
  
},
button: {
  padding: 40,
  borderRadius: 4,
  borderWidth: 1,
  borderColor: 'green',
  backgroundColor: 'lightgreen',
},
buttonflat: {
 // padding: 40,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: 'black',
  backgroundColor: 'green',
  width:140,
  height:40,
  fontWeight:'bold'
},
})

import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {Icon} from "react-native-vector-icons/MaterialIcons";
import { Provider } from "react-native-redux";
import { mystore } from "./src/Mystore";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


 import Flexbox from './src/Flexbox'
 import Chapter from './src/Chapter'
 import Gallery from './src/Gallery'
 import QNbank from './src/QNbank'
 import Resources from './src/Resources'
 import Vedios from './src/Vedios'
 import Searchscreen from "./src/Searchscreen";
 import Home from "./src/Home";
 import Profile from "./src/Profile";
 import Secondpage from './src/Secondpage';
 import Thirdpage from "./src/Thirdpage";
 import Fourthpage from "./src/Fourthpage";
 import Fifthpage from "./src/Fifthpage";
 import Sixthpage from "./src/Sixthpage";
 import Myproducts from "./src/Products";

 const stack=createStackNavigator()
 //const drawer=createDrawerNavigator()
 const tab=createMaterialTopTabNavigator()
 const bottomtab=createBottomTabNavigator()

 function MybottomTab(){
  return(
   
    <bottomtab.Navigator>
      <bottomtab.Screen
      name="Home"
      component={Home}     
      />
     <bottomtab.Screen
      name="Profile"
      component={Profile}     
      />
      
    </bottomtab.Navigator>
  
  )
 }
 function MyStack()
 {
    return(
    <stack.Navigator>
   
        <stack.Screen
        name="Flexbox"
        component={Flexbox}
        options={{
          headerShown:false
        
        }}
        
        />   
       <stack.Screen
        name="Chapter"
        component={Chapter}/>
        <stack.Screen
        name="src"
        component={MyTab}
        options={{headerShown:false}}/>
      
    </stack.Navigator>                                                                                
    )
 }
 function MyTab(){
  return(
    <tab.Navigator
    screenOptions={{
      tabBarLabelStyle:{fontSize:12},
      tabBarItemStyle:{width:100}     
           
    }}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'black'
      
  }}
  >
      <tab.Screen
      name='Gallery'
      component={Gallery}
      //options={{
        //tabBarIcon:()=> <Icon name="Search" size={24}/>
      //}}
     />
     <tab.Screen
      name='QNbank'
      component={QNbank}/>
       <tab.Screen
      name='Resources'
      component={Resources}/>
      <tab.Screen
      name='Vedios'
      component={Vedios}/> 
    </tab.Navigator>
  )
 }
//function MyDrawer()
//{
 // return(
    //<drawer.Navigator>
      //  <drawer.Screen
       //  name="Flexbox"
       //  component={Flexbox}/> 
    //</drawer.Navigator>
  //)  
//}

 export default function App(){
    return(
     
    <NavigationContainer>
  
   
    <stack.Navigator>
    
       <stack.Screen
       name="tab-navigator"
       component={MyStack}
       options={{headerShown:false}}/>
     
     <stack.Screen
     name="Secondpage"
     component={Secondpage}
     options={{headerShown:false}}/>
     <stack.Screen
     name="Thirdpage"
     component={Thirdpage}
     options={{headerShown:false}}/>
     <stack.Screen
     name="Fourthpage"
     component={Fourthpage}
     options={{headerShown:false}}/>
     <stack.Screen
     name="Fifthpage"
     component={Fifthpage}
     options={{headerShown:false}}/>
      <stack.Screen
     name="Sixthpage"
     component={Sixthpage}
     options={{headerShown:false}}/>
       
      </stack.Navigator>
      
      </NavigationContainer>
    
    )
 }

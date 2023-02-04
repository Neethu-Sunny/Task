import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import Products from "../src/Products";
import Cart from "../src/Cart";
import Async from "../src/Async";
import Realmbook from "../src/Realmbook";

const stack=createStackNavigator()
const Main=()=>{
    return(
     
        <NavigationContainer>
      
        <stack.Navigator>
          
           <stack.Screen
         name="Products"
         component={Products}
         options={{headerShown:false}}/>
           <stack.Screen
         name="Cart"
         component={Cart}
         options={{headerShown:false}}/>
         <stack.Screen
         name="Async"
         component={Async}
         options={{headerShown:false}}/>
         <stack.Screen
         name="Realmbook"
         component={Realmbook}
         options={{headerShown:false}}/>
          </stack.Navigator>
          
          </NavigationContainer>
        
        )
};
export default Main;

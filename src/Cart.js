import React,{Component} from "react";
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { addItemToCart } from "./Actions";


 import{
    View,
    StyleSheet,
     Text,
     FlatList,
     Image,
     TouchableOpacity
  
}from "react-native";
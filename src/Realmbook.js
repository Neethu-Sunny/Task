import React,{Component} from "react";
import { useState } from "react";
import Realm from 'realm';

import{
  View,
  StyleSheet,
   Text,
   FlatList,
   TouchableOpacity,
   TextInput,
   Button,
   SafeAreaView

}from "react-native";

//class BookSchema  extends Realm.Object{}
const Real=()=>{

const book={
   name:"Book",
   properties:{
       recordID:'int',
       bookName:'string',
       authorName:'string',
       details:'string'
   },
   
}
const renderItem=({item})=>(
  <View style={{flexDirection:'row',justifyContent:'center'}}>
  <Text>{item.recordID}</Text>
  <Text>{item.bookName}</Text>
  <Text>{item.authorName}</Text>
  <Text>{item.details}</Text>
  </View>
 );
//let realm = new Realm({schema: [BookSchema ], schemaVersion: 4});

//const realm = await Realm.open({schema: [BookSchema]});
function getAllBooks(){

  Realm.open({
    schema:[book]
   }).then(realm=>{
    realm.objects('Book');
   })
}
function addBooks(){
   
 console.log('hi');
 Realm.open({
    schema:[book]
   }).then(realm=>{
    realm.write(()=>{
      realm.create('Book',{
        recordID:1,
       bookName:'dara',
       authorName:'dan',
       details:'novel',
      })
    })
    realm.close()
   }).catch(err=>{
      console.log('ERR:',err)
   })
}
return(
  <SafeAreaView style={{padding:3}}>
      <Text>Books</Text>
      <View style={{margin:20,width:250}}>
          <Button title="Add" onPress={addBooks}>                   
          </Button>
      </View>
      
      <View style={{margin:20,width:250}}>
          <Button title="Get" onPress={getAllBooks}></Button>
      </View>
      <View style={{marginTop:100}}>
          <Text style={{marginTop:10,fontSize:25,fontWeight:'bold'}}>Contactseeee</Text>
          <FlatList
          data={book}
          keyExtractor={item=>item.recordID}
          renderItem={renderItem}
          />
      </View>
  </SafeAreaView>
)
}
export default Real;

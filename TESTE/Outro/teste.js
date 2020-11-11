import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';

const App = () => {

 
  return (
    <>
      <View style={{ paddingTop: Constants.statusBarHeight }} />
      
        <ScrollView contentContainerStyle={{padding:1}} style={[styles.container]}>
            <View style={[styles.controlSpace]}>
            
                <View>
                <TouchableOpacity style={styles.buttonView2}>
                  <Ionicons name="md-home" size={29} color='red' />
                  <Text style={{color:'red'}}>HOME</Text>
               </TouchableOpacity>
               </View>
               
                <View>
                <TouchableOpacity style={styles.buttonView2}>
                  <Ionicons name="md-home" size={29} color='red' />
                  <Text style={{color:'red'}}>HOME</Text>
               </TouchableOpacity>
               </View>

               <View>
                <TouchableOpacity style={styles.buttonView2}>
                  <Ionicons name="md-home" size={29} color='red' />
                  <Text style={{color:'red'}}>HOME</Text>
               </TouchableOpacity>
               </View>
               
                <View>
                <TouchableOpacity style={styles.buttonView2}>
                  <Ionicons name="md-home" size={29} color='red' />
                  <Text style={{color:'red'}}>HOME</Text>
               </TouchableOpacity>
               </View>
                
               <View>
                <TouchableOpacity style={styles.buttonView2}>
                  <Ionicons name="md-home" size={29} color='red' />
                  <Text style={{color:'red'}}>HOME</Text>
               </TouchableOpacity>
               </View>
               
                <View>
                <TouchableOpacity style={styles.buttonView2}>
                  <Ionicons name="md-home" size={29} color='red' />
                  <Text style={{color:'red'}}>HOME</Text>
               </TouchableOpacity>
               </View>

               <View>
                <TouchableOpacity style={styles.buttonView2}>
                  <Ionicons name="md-home" size={29} color='red' />
                  <Text style={{color:'red'}}>HOME</Text>
               </TouchableOpacity>
               </View>
               
                <View>
                <TouchableOpacity style={styles.buttonView2}>
                  <Ionicons name="md-home" size={29} color='red' />
                  <Text style={{color:'red'}}>HOME</Text>
               </TouchableOpacity>
               </View>
                
            </View>
        </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
    backgroundColor:'#232835',
  },
  buttonView2:{
    backgroundColor:'#353A49',
    width: 190,
    height:150,
    marginLeft:10,
    marginBottom:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5F5F5',
  },
  buttonView: {
    width: '50%',
    padding: 5,
    
   
  },
  text: { textAlign: 'center' },
});

export default App;
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
//<Ionicons name="md-home" size={29} color='red' />
//<Text style={{color:'red'}}>HOME</Text>

/////////////////////////////TELA HOME//////////////////////////////////////

import Constants from 'expo-constants';


import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

function TopoAPP() {
	return (
        <>

        <View style={{ paddingTop: Constants.statusBarHeight }} />
        
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 90, height: 15, backgroundColor: '#DD4545'}} />
          <View style={{width: 90, height: 15, backgroundColor: '#338AE8'}} />
          <View style={{width: 90, height: 15, backgroundColor: '#14AA4B'}} />
          <View style={{width: 90, height: 15, backgroundColor: '#7CB342'}} />
          <View style={{width: 90, height: 15, backgroundColor: '#00897B'}} />
        </View>
  
  
        <View style={styles.TopoContainer}> 
            <View style={styles.TopoHeader}>
                <Image source={require('../src/img/FotoPerfil.png')} />
                <View style={styles.TopoInfoPerfil}>
                <Text style={styles.TopoNome}> Diogo Silva </Text>
                <Text style={styles.TopoEmail}> Diogomfc@hotmail.com</Text> 
               </View>
                  <View style={styles.TopoAjuda}>
                    <TouchableOpacity>
                      <MaterialCommunityIcons name="help-circle" size={30} color="#10c86e" />
                    </TouchableOpacity>
                  </View> 
            </View>  
        </View>
      </>
	)
}

export default function metas() {
    return(
       <TopoAPP></TopoAPP>
    );
}

const styles = StyleSheet.create({

  text: { textAlign: 'center' },

  TopoContainer:{
    height: 80,
    padding: 16,
    backgroundColor: '#353A49',
  },

  TopoHeader:{
    height: 50,
    padding: 0,
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
    //space-between
  },

  TopoNome:{
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 20,
    textAlign:'left',
    fontWeight:'bold',
    marginLeft:10,
  },

  TopoEmail:{
    color: '#fff',
    fontSize: 14,
    textAlign:'center',
    marginLeft:10,
  },

  TopoInfoPerfil:{
    color: '#fff',
    fontSize: 20,
    textAlign:'center',
    fontWeight:'bold',
  },

  TopoAjuda:{
    marginLeft:60,
    
  },


});
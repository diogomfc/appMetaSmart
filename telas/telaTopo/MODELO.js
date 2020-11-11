import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView, StatusBar } from 'react-native';


import { MaterialCommunityIcons } from '@expo/vector-icons';

///////////////////TOPO///////////////////////////////

function TopoHome() {
  return(
<>     
       <StatusBar barStyle='light-content' hidden={false} backgroundColor="#353A49" />
            <View style={{flexDirection: 'row'}}>
                    <View style={{width: 90, height: 15, backgroundColor: '#DD4545'}} />
                    <View style={{width: 90, height: 15, backgroundColor: '#338AE8'}} />
                    <View style={{width: 90, height: 15, backgroundColor: '#14AA4B'}} />
                    <View style={{width: 90, height: 15, backgroundColor: '#7CB342'}} />
                    <View style={{width: 90, height: 15, backgroundColor: '#00897B'}} />
            </View>
        <View style={styles.TopoContainer}> 
          <View style={styles.TopoHeader}>
              <Image source={require('../../src/img/FotoPerfil.png')} />
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

      <Conteudo></Conteudo>

    </>

  );
}

///////////////////////////////CONTEUDO//////////////////////////////
function Conteudo() {
	return (
		<ScrollView contentContainerStyle={{padding:1}} style={[stylesConteudo.container]}>
            <View style={[stylesConteudo.controlSpace]}>
             <Text style={stylesConteudo.text}>CONTEUDO</Text>
            </View>
        </ScrollView>
	);
}

///////////////////////////////TOPO APP//////////////////////////////
export default function topoApp() {
  return (
    <TopoHome></TopoHome>
  );
}


  ///// STYLES - CONTEUDO /////
  const stylesConteudo = StyleSheet.create({
    container: {
      height: '50%',
      backgroundColor:'#232835',   
    },
    controlSpace: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    text: { 
      color: '#fff',
      fontSize: 14,
      textAlign:'center',
    },
  });

///// STYLES - TOPO /////
const styles = StyleSheet.create({

    TopoContainer:{
      height: 80,
      padding: 16,
      backgroundColor: '#353A49',
      width: '100%',
     
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

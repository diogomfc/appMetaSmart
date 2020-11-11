import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView, StatusBar } from 'react-native';



///////////////////////////////CONTEUDO//////////////////////////////
function ConteudoAJuda() {
	return (
		<ScrollView contentContainerStyle={{padding:1}} style={[stylesConteudo.container]}>
            <View style={[stylesConteudo.controlSpace]}>
             <Text style={stylesConteudo.text}>CONTEUDO TESTE ATIVAÇÃO </Text>
            </View>
        </ScrollView>
	);
}

///////////////////////////////TOPO APP//////////////////////////////
export default function ajuda() {
  return (
    <>
    <ConteudoAJuda></ConteudoAJuda>
    </>
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

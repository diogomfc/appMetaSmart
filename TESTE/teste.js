import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialCommunityIcons } from '@expo/vector-icons';


import TesteAjuda from './TESTE/TesteAjuda.js'


///////////////////////////////TOPO APP//////////////////////////////
export default function topoApp() {
  return (
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
function Conteudo({navigation}) {
	return (
    
		<ScrollView contentContainerStyle={{padding:1}} style={[stylesConteudo.container]}>
       
            <View style={[stylesConteudo.controlSpace]}>
         
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Ajuda')}  style={stylesConteudo.buttonView2}>
                <Image source={require('../../src/img/Metas.png')} />
                <Text style={stylesConteudo.TextBotao}>Metas</Text>
              </TouchableOpacity>
            </View>
               
            <View>
              <TouchableOpacity style={stylesConteudo.buttonView2}>
                <Image source={require('../../src/img/QualidadeM0.png')} />
                <Text style={stylesConteudo.TextBotao}>Qualidade</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={stylesConteudo.buttonView2}>
                <Image source={require('../../src/img/extrato.png')} />
                <Text style={stylesConteudo.TextBotao}>Extrato</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={stylesConteudo.buttonView2}>
                <Image source={require('../../src/img/Ativacao.png')} />
                <Text style={stylesConteudo.TextBotao}>Ativação</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={stylesConteudo.buttonView2}>
                <Image source={require('../../src/img/Prospeccao.png')} />
                <Text style={stylesConteudo.TextBotao}>Prospecção</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={stylesConteudo.buttonView2}>
                <Image source={require('../../src/img/Migracao.png')} />
                <Text style={stylesConteudo.TextBotao}>Migração</Text>
              </TouchableOpacity>
            </View>

            </View>
          
      </ScrollView>
	);
}

function AjudaScreen() {
	return (
	 <TesteAjuda></TesteAjuda>
	);
  }


const Stack = createStackNavigator();

function home() {
  return (
    <NavigationContainer headerMode='none'>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Conteudo} />
        <Stack.Screen name="Ajuda" component={AjudaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default home;

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
    buttonView2:{
        width: 174,
        height:140,
        marginTop:10,
        marginLeft:5,
        marginBottom:5,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
    
      TextBotao:{
        color: '#fff',
        fontSize: 15,
        textAlign:'center',
        //fontWeight:'bold',
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

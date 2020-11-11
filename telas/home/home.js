import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';



import TelaAtivacao from '../ativacao/ativacao.js'
import TelaExtrato from '../extrato/extrato.js'
import TelaMetas from '../metas/metas.js'
import TelaMigracao from '../migracao/migracao.js'
import TelaProspeccao from '../prospeccao/prospeccao.js'
import TelaQualidade from '../qualidade/qualidade.js'

//TELA HOME
function HomeScreen({ navigation }) {
  return (
	  <>

<ScrollView contentContainerStyle={{padding:1}} style={[stylesConteudo.container]}>
   
   <View style={[stylesConteudo.controlSpace]}>
     
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Metas')} style={stylesConteudo.buttonView2}>
            <Image source={require('../../src/img/Metas.png')} />
            <Text style={stylesConteudo.TextBotao}>Metas</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Qualidade')} style={stylesConteudo.buttonView2}>
            <Image source={require('../../src/img/QualidadeM0.png')} />
            <Text style={stylesConteudo.TextBotao}>Qualidade</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Extrato')} style={stylesConteudo.buttonView2}>
            <Image source={require('../../src/img/extrato.png')} />
            <Text style={stylesConteudo.TextBotao}>Extrato</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Ativacao')} style={stylesConteudo.buttonView2}>
            <Image source={require('../../src/img/Ativacao.png')} />
            <Text style={stylesConteudo.TextBotao}>Ativação</Text>
            </TouchableOpacity>
       </View>

       <View>
            <TouchableOpacity onPress={() => navigation.navigate('Prospeccao')} style={stylesConteudo.buttonView2}>
            <Image source={require('../../src/img/Prospeccao.png')} />
            <Text style={stylesConteudo.TextBotao}>Prospecção</Text>
            </TouchableOpacity>
       </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Migracao')} style={stylesConteudo.buttonView2}>
            <Image source={require('../../src/img/Migracao.png')} />
            <Text style={stylesConteudo.TextBotao}>Migração</Text>
            </TouchableOpacity>
        </View>

    </View>

</ScrollView>

</>
  );
}

//TELAS BOTÕES
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Ie para tela home" onPress={() => navigation.navigate('Home')}/>
      
    </View>
  );
}

  
function AtivacaoScreen() {
  return (
    <TelaAtivacao></TelaAtivacao>
  );
}
    
function ExtratoScreen() {
  return (
   <TelaExtrato></TelaExtrato>
  );
 }

 function MetasScreen() {
  return (
    <TelaMetas></TelaMetas>
  );
}
function MigracaoScreen() {
   return (
   <TelaMigracao></TelaMigracao>
  );
 }
      
function ProspeccaoScreen() {
  return (
   <TelaProspeccao></TelaProspeccao>
  );
 }

 function QualidadeScreen() {
  return (
   <TelaQualidade></TelaQualidade>
  );
 }

const Stack = createStackNavigator();

export default function home() {
  return (
    <>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Metas" component={MetasScreen} />
		    <Stack.Screen name="Qualidade" component={QualidadeScreen} />
        <Stack.Screen name="Extrato" component={ExtratoScreen} />
        <Stack.Screen name="Ativacao" component={AtivacaoScreen} />
		    <Stack.Screen name="Prospeccao" component={ProspeccaoScreen} />
        <Stack.Screen name="Migracao" component={MigracaoScreen} />
      </Stack.Navigator>
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
      flexWrap:'wrap',
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

import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import TesteAjuda from './TesteAjuda.js'


//TELA HOME
function HomeScreen({ navigation }) {
  return (
	  <>

<ScrollView contentContainerStyle={{padding:1}} style={[stylesConteudo.container]}>
   
   <View style={[stylesConteudo.controlSpace]}>
     
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Details')} style={stylesConteudo.buttonView2}>
            <Image source={require('../src/img/Ativacao.png')} />
            <Text style={stylesConteudo.TextBotao}>Metas</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Ajuda')} style={stylesConteudo.buttonView2}>
            <Image source={require('../src/img/Metas.png')} />
            <Text style={stylesConteudo.TextBotao}>Qualidade</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Ajuda')} style={stylesConteudo.buttonView2}>
            <Image source={require('../src/img/Metas.png')} />
            <Text style={stylesConteudo.TextBotao}>Extrato</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Ajuda')} style={stylesConteudo.buttonView2}>
            <Image source={require('../src/img/Metas.png')} />
            <Text style={stylesConteudo.TextBotao}>Ativação</Text>
            </TouchableOpacity>
       </View>

       <View>
            <TouchableOpacity onPress={() => navigation.navigate('Ajuda')} style={stylesConteudo.buttonView2}>
            <Image source={require('../src/img/Metas.png')} />
            <Text style={stylesConteudo.TextBotao}>Prospecção</Text>
            </TouchableOpacity>
       </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Ajuda')} style={stylesConteudo.buttonView2}>
            <Image source={require('../src/img/Metas.png')} />
            <Text style={stylesConteudo.TextBotao}>Migração</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Ajuda')} style={stylesConteudo.buttonView2}>
            <Image source={require('../src/img/Metas.png')} />
            <Text style={stylesConteudo.TextBotao}>Migração</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Ajuda')} style={stylesConteudo.buttonView2}>
            <Image source={require('../src/img/Metas.png')} />
            <Text style={stylesConteudo.TextBotao}>Migração</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Ajuda')} style={stylesConteudo.buttonView2}>
            <Image source={require('../src/img/Metas.png')} />
            <Text style={stylesConteudo.TextBotao}>Migração</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Ajuda')} style={stylesConteudo.buttonView2}>
            <Image source={require('../src/img/Metas.png')} />
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


function AjudaScreen() {
	return (
	 <TesteAjuda></TesteAjuda>
	);
  }


const Stack = createStackNavigator();

export default function TesteHome() {
  return (
    <>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
		<Stack.Screen name="Ajuda" component={AjudaScreen} />
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

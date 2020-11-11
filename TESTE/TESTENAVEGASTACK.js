import * as React from 'react';
import { View, Text,Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TesteAjuda from './TESTE/TesteAjuda.js'


//TELA HOME
function HomeScreen({ navigation }) {
  return (
	  <>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>BOTOES</Text>
      
	  <TouchableOpacity onPress={() => navigation.navigate('Details')}>
	  <Image source={require('./src/img/Ativacao.png')} />
      <Text>DETALHES</Text>
      </TouchableOpacity>

	  <TouchableOpacity onPress={() => navigation.navigate('Ajuda')}>
	  <Image source={require('./src/img/Metas.png')} />
      <Text>TELA AJUDA ss</Text>
      </TouchableOpacity>

    </View>

</>
  );
}

//TELA DETALHES
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
		<Stack.Screen name="Ajuda" component={AjudaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
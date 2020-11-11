import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//ABA TELA HOME
function TelaHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TELA HOME</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
        <Text>Ir para tela sobre</Text>
      </TouchableOpacity>
    </View>
  );
}

//ABA PARAMETROS
function TelaParametizacao({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PARAMETROS DE CONFIGURAÇÃO</Text>
    
    </View>
  );
}

//ABA PERFIL
function TelaPerfil({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SEU PERFIL</Text>
    
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'Parametizacao') {
            iconName = focused ? 'ios-apps' : 'ios-apps';
            
          }else if (route.name === 'Perfil') {
              iconName = focused ? 'md-contact' : 'md-contact';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#338AE8',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={TelaHome} />
      <Tab.Screen name="Parametizacao" component={TelaParametizacao} />
      <Tab.Screen name="Perfil" component={TelaPerfil} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

export default App;
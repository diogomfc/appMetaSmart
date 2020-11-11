import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/Feather';

//import TelaNhome from './telas/home/home.js';
//import TelaAjuda from './telas/ajuda/ajuda.js';
//import TelaConfiguracao from './telas/parametrizacao/configuracao.js';
import TesteHome from './TesteHome.js'

// ===================================================================================================

function HomeScreen() {
	return (
	<TesteHome></TesteHome>
	);
}

function AjudaScreen() {
	return (
    <Text>TESTE AJUDA</Text>
	);
}

function SettingsScreen() {
	return (
    <Text>TESTE CONFIGURAÇÃO</Text>
	);
}

function BtmConfig() {
	return (
  <View style={{paddingBottom:25}}>	
	
	<LinearGradient
		// Button Linear Gradient
		colors={['#4c669f', '#3b5998', '#192f6a']}
		style={{ 
			width: 60, 
			height:60, 
			alignItems: 'center', 
			borderRadius: 30, 
			justifyContent:'center', 
			}}>
	   <MaterialIcons name="settings" size={32} color="#FFFFFF"/>
	</LinearGradient> 
	
	</View>	
	);
}
// ===================================================================================================

//CONFIG TB NAVIGATOR
const Tab = createBottomTabNavigator();

export default function Nevegacao() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color, size }) => {
						                      
						let iconName;
						 
						switch (route.name) {
							case 'Home':
								iconName = 'home';
								break;
						
							case 'Configuração':
								iconName = 'settings';
								break;

							case 'Ajuda':
								iconName = 'help-outline';
								break;
							
						}

						if (route.name == 'Configuração'){
							return <BtmConfig />;
						  }

						return <Icon name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: '#338AE8',
					inactiveTintColor: '#777',
                    showLabel: true,
                    style: {backgroundColor:'#3E424E'},
				}}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				
                <Tab.Screen name="Configuração" component={SettingsScreen} />
				
				<Tab.Screen name="Ajuda" component={AjudaScreen} />

			</Tab.Navigator>
		</NavigationContainer>
	);
}

//CONFIG CSS
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#232835'
	},
});
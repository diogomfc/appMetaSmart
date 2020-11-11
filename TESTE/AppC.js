import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import LogoSmart from './src/icons/LogoSmart';
import Backgroudmp4 from './src/Video/backgroudmp4'

function HomeScreen() {
	return (
		<View style={styles.container}>
			<LogoSmart></LogoSmart>
		</View>
	);
}

function ListScreen() {
	return (
		<View style={styles.container}>
			<Text>New Post!</Text>
		</View>
	);
}

function PostScreen() {
	return (
		<View style={styles.container}>
			<Text>New Post!</Text>
		</View>
	);
}

function NotificationsScreen() {
	return (
		<View style={styles.container}>
			<Text>Notifications!</Text>
		</View>
	);
}

function SettingsScreen() {
	return (
		<View style={styles.container}>
			<Text>Settings!</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
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
							case 'Categories':
								iconName = 'list';
								break;
							case 'Post':
								iconName = 'edit';
								break;
							case 'Notifications':
								iconName = 'bell';
								break;
							case 'Settings':
								iconName = 'settings';
								break;
							default:
								iconName = 'circle';
								break;
						}

						return <Icon name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: '#338AE8',
					inactiveTintColor: '#777',
          showLabel: false,
          style: {backgroundColor:'#3E424E'},
				}}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Categories" component={ListScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
				<Tab.Screen name="Notifications" component={NotificationsScreen} />
				<Tab.Screen name="Settings" component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232835'
	},
	iconTabRound: {
        backgroundColor: '#9C27B0',
        width: 72,
        height: 72,
        borderRadius: 36,
        position:'absolute',
        top: -60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#9C27B0',
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        borderWidth: 3,
        borderColor:'#FFF'
    }
});
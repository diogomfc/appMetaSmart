import React from 'react';
//import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';


////// ICONS PERSONALIZADO COM GRADIENTE

export default function PayButton() {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={{ width: 60, height:60, alignItems: 'center', borderRadius: 30, justifyContent:'center' }}>
     <MaterialIcons name="settings" size={32} color="#FFFFFF"/>
  </LinearGradient>  
  );
}

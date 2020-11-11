import React, { Component } from 'react';
import { View } from 'react-native';
import Speedometer from 'react-native-speedometer-chart';


export default class Main extends Component {
  render() {
    return (
      <>
      <View style={{padding:5}}>
      <Speedometer
    value={60}
    totalValue={100}
    size={380}
    outerColor="#d3d3d3"
    internalColor="#ff0000"
    innerColor="#353A49"
    showText
    text="50.00"
    textStyle={{ color: 'green' }}
    showLabels
    labelStyle={{ color: 'blue' }}
    labelFormatter={number => `${number}%`}
    showPercent
    percentStyle={{ color: 'red' }}
    
  />
  </View>
  <View>
  <Speedometer 
  value={25} 
  totalValue={100} 
  showIndicator
  indicatorColor = 'red' />
  </View>
  </>
    );
  }
}
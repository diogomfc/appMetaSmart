import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView, StatusBar} from 'react-native';
import Speedometer from 'react-native-speedometer-chart';

import DatePicker from 'react-native-datepicker';


///////////////////////////////BARRA DIVIDE//////////////////////////////
function BarraCor (){
  return(
<>
  <View style={stylesConteudo.BarraMetas} >
  <Text style={{fontSize:20, color:'#fff', textAlign:'center', justifyContent:'center'}}>METAS</Text>    
  </View> 
    
 </>
    
  );
}

///////////////////////////////DATA//////////////////////////////
function DataData() {
  const [date, setDate] = useState(new Date())
	return (
    <DatePicker
      format="DD-MM-YYYY" 
      date={date}
      onDateChange={setDate}
      style={{width: '100%', padding: 10}}
      customStyles = {{
        dateText:{
          fontSize: 25,
          color: '#979797'
        },
        dateInput: {
          borderColor: '#707070',
          borderRadius: 8,
          //height: 40,
          //alignItems: 'flex-end',
        },

      }}
    />  
	);
}

///////////////////////////////GRAFICO RESULTDO//////////////////////////////
function GrafcioResultado() {
	return (

    <Speedometer
      value={97}
      totalValue={100}
      size={350}
      outerColor="#d3d3d3"
      internalColor="#2ECC71"
      innerColor="#353A49"

      showLabels
      labelFormatter={number => `${number}%`}
      labelStyle={{ color: '#d3d3d3' }}
      
      showText
      text="META ATINGIDA"
      textStyle={{ color: '#2ECC71' }}
      
      
      showPercent
      //percentStyle={{ color: '#D64550' }}
      percentStyle={{ color: '#2ECC71' }}
    />

	);
}

///////////////////////////////CONTEUDO//////////////////////////////
function ConteudoAJuda() {
	return (
    <>
		<ScrollView contentContainerStyle={{padding:1}} style={stylesConteudo.container}>
            <View style={stylesConteudo.controlSpace}>

              <View style={{flexDirection:'row', padding:4}}>
                <View style={{backgroundColor:'#353A49', width:'60%', height:87, borderRadius:8, marginRight: 4}}>
                <Text style={{fontSize:20, color:'#2B99AC', textAlign:'center', justifyContent:'center'}}>Filtra Mês</Text>
                <View><DataData></DataData></View> 
                </View>
                <View style={{backgroundColor:'#353A49', width:'39%', height:87, borderRadius:8, marginRight: 4}}>
                <Text style={{fontSize:20, color:'#2B99AC', textAlign:'center', justifyContent:'center'}}>Meta</Text>
                <Text style={{fontSize:40, color:'#4CFF00', textAlign:'center',fontWeight:'bold', justifyContent:'center'}}>97%</Text> 
                </View>
             </View>
             
             <View style={{backgroundColor:'#353A49', width:'99%', height:155, borderRadius:8, marginRight: 4, marginLeft:4}}>
             </View>

             <View style={{backgroundColor:'#353A49', width:'99%', height:30, borderRadius:8, marginRight: 4, marginLeft:4, margin:4}}>
             <Text style={{fontSize:20, color:'#2B99AC', textAlign:'center', justifyContent:'center'}}>CARTEIRA POR PERÍODO</Text>  
             </View>
             <View style={{backgroundColor:'#353A49', width:'99%', height:217, borderRadius:8, marginRight: 4, marginLeft:4}}>
               <View style={{padding:6, alignItems:'center'}}>
                 <GrafcioResultado></GrafcioResultado>
               </View>
             </View>

             <View style={{flexDirection:'row', padding:4}}>
                <View style={{backgroundColor:'#353A49', width:'33%', height:58, borderRadius:8, marginRight: 4}}>
                <Text style={{fontSize:20, color:'#2B99AC', textAlign:'center', justifyContent:'center'}}>Receita Total</Text>
                <Text style={{fontSize:20, color:'#4CFF00', textAlign:'center',fontWeight:'bold', justifyContent:'center'}}>R$4.290,00</Text> 
                </View>
                <View style={{backgroundColor:'#353A49', width:'33%', height:58, borderRadius:8, marginRight: 4}}>
                <Text style={{fontSize:20, color:'#2B99AC', textAlign:'center', justifyContent:'center'}}>Lucro Bruto</Text>
                <Text style={{fontSize:20, color:'#4CFF00', textAlign:'center',fontWeight:'bold', justifyContent:'center'}}>R$1.060,00</Text> 
                </View>
                <View style={{backgroundColor:'#353A49', width:'32%', height:58, borderRadius:8, marginRight: 4}}>
                <Text style={{fontSize:20, color:'#2B99AC', textAlign:'center', justifyContent:'center'}}>Custo Total</Text>
                <Text style={{fontSize:20, color:'#D64550', textAlign:'center',fontWeight:'bold', justifyContent:'center'}}>R$2.910,00</Text> 
                </View>
             </View>
             
             <View>
             <Text style={{fontSize:20, color:'#2ECC71', textAlign:'center', justifyContent:'center'}}>Ótimo - Meta Atingida - Novembro - 2020</Text> 
             </View>

            </View>
        </ScrollView>
        </>
	);
}

///////////////////////////////TOPO APP//////////////////////////////
export default function ajuda() {
  return (
    <>
    <BarraCor></BarraCor>
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
    BarraMetas:{
      backgroundColor: '#733999',
      width:'100%',
      height: 25,
    },
    dataData:{
     width: '100%',
     fontSize: 20,
     padding: 10
     
    }
  });

  
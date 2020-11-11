import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView, StatusBar } from 'react-native';



///////////////////////////////CONTEUDO//////////////////////////////
function ConteudoAJuda() {
	return (
		<ScrollView contentContainerStyle={{padding:2}} style={[stylesConteudo.container]}>
            <View style={[stylesConteudo.controlSpace]}>
             <Text style={stylesConteudo.text}>CONTEUDO TELA CONFIGURAÇÃO 222</Text>
             <Text style={stylesConteudo.text}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
              e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer 
              um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, 
              permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, 
             e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. </Text>

             <Text style={stylesConteudo.text}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
              e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer 
              um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, 
              permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, 
             e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. </Text>

             <Text style={stylesConteudo.text}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
              e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer 
              um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, 
              permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, 
             e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. </Text>

             <Text style={stylesConteudo.text}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
              e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer 
              um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, 
              permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, 
             e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. </Text>

             <Text style={stylesConteudo.text}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
              e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer 
              um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, 
              permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, 
             e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. </Text>
            </View>
        </ScrollView>
	);
}

///////////////////////////////TOPO APP//////////////////////////////
export default function ajuda() {
  return (
    <>
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
  });

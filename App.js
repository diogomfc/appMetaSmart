import React from 'react';

//import TesteTopo from './TESTE/TesteTopo.js'
//import TesteNavegacao from './TESTE/TesteNavegacao.js'
////// Garregando Telas

import Topo from './telas/topo/topo.js'
import TabNavigation from './telas/navegation/tabNavegacao.js'

console.disableYellowBox = true;

export default function App() {
  return (
    <>
    <Topo></Topo>
    <TabNavigation></TabNavigation>
    </>
  );
}
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';
import RecoilNexus from 'recoil-nexus';

import Fabidecor from './src/views/Fabidecor';

import Avaliacao from './src/views/Avaliacao';
import Contato from './src/views/Contato';
import Informacao from './src/views/Informacao';
import Categoria from './src/views/Categoria';
import Produto from './src/views/Produto';
import Tema from './src/views/Tema';


const Stack = createNativeStackNavigator(); 

function Main() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Fabidecor" component={Fabidecor} />
          <Stack.Screen name="Avaliacao" component={Avaliacao} />
          <Stack.Screen name="Contato" component={Contato} />
          <Stack.Screen name="Informacao" component={Informacao} />
          <Stack.Screen name="Categoria" component={Categoria} />
          <Stack.Screen name="Produto" component={Produto} />
          <Stack.Screen name="Tema" component={Tema} />


        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <Main />
    </RecoilRoot>
  );
}




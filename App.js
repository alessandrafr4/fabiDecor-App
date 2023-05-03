import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Fabidecor from './screens/Fabidecor';
import Casamento from './screens/Casamento';
import Aniversario from './screens/Aniversario';
import Formatura from './screens/Formatura';
import Avaliacao from './screens/Avaliacao';
import Contato from './screens/Contato';
import Informacao from './screens/Informacao';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Fabidecor" component={Fabidecor} />
          <Stack.Screen name="Casamento" component={Casamento} />
          <Stack.Screen name="Formatura" component={Formatura} />
          <Stack.Screen name="Aniversario" component={Aniversario} />
          <Stack.Screen name="Avaliacao" component={Avaliacao} />
          <Stack.Screen name="Contato" component={Contato} />
          <Stack.Screen name="Informacao" component={Informacao} />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TemaAdd from './TemaAdd';
import TemaList from './TemaList';

const Stack = createNativeStackNavigator();

export default function Tema() {
  return (
    <Stack.Navigator initialRouteName="TemaList">
      <Stack.Screen
        name="TemaList"
        component={TemaList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TemaAdd"
        component={TemaAdd}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import categoriaAdd from './CategoriaAdd';
import categoriaList from './CategoriaList';

const Stack = createNativeStackNavigator();

export default function Categoria() {
  return (
    <Stack.Navigator initialRouteName="categoriaList">
      <Stack.Screen
        name="categoriaList"
        component={categoriaList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="categoriaAdd"
        component={categoriaAdd}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

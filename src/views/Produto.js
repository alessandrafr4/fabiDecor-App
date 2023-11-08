import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProdutoAdd from './ProdutoAdd';
import ProdutoList from './ProdutoList';

const Stack = createNativeStackNavigator();

export default function Produto() {
  return (
    <Stack.Navigator initialRouteName="ProdutoList">
      <Stack.Screen
        name="ProdutoList"
        component={ProdutoList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProdutoAdd"
        component={ProdutoAdd}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

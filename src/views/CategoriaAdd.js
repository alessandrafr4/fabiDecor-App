import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

import categoriaService from '../services/categorias';
import { useState } from 'react';

export default function CategoriaAdd({ navigation }) {
  const [categoria, setCategoria] = useState({ name: '' });

  async function addCategoria() {
    await categoriaService.saveCategoria(categoria);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="headlineMedium">
        Nova Categoria
      </Text>
      <TextInput
        label="Categoria"
        style={{ width: '90%', marginBottom: 10 }}
        onChangeText={(text) => setCategoria({ name: text })}
      />
      <Button icon="content-save" mode="elevated" onPress={() => addCategoria()}>
        Salvar
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
  },
});

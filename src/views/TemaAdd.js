import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

import temaService from '../services/temas';
import { useState } from 'react';

export default function TemaAdd({ navigation }) {
  const [tema, setTema] = useState({ name: '' });

  async function addTema() {
    await temaService.saveTema(tema);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="headlineMedium">
        Novo Tema
      </Text>
      <TextInput
        label="Tema"
        style={{ width: '90%', marginBottom: 10 }}
        onChangeText={(text) => setTema({ name: text })}
      />
      <Button icon="content-save" mode="elevated" onPress={() => addTema()}>
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

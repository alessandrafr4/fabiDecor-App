import React from 'react';
import { StyleSheet, Button, View, Image, Text, TextInput } from 'react-native';
import { DefaultTheme } from 'react-native-paper';


function AvaliacaoItem(props) {
  return (
    <Image
      source={{ uri: props.avaliacao.capa }}
      style={{ width: 170, height: 150, margin: 10 }}
      onPress={() => { }}
    />
  )
}

export default function Avaliacao() {
  return (
    <View style={styles.container}>
      <View style={styles.avaliacao}>
        <TextInput
          placeholder="Digite sua avaliação"
          numberOfLines={5}
        />
        <Button title="Enviar" />
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10,
    flexDirection: 'column'
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap'

  },
  avaliacao: {
    flexDirection: 'column',
    // flexWrap: 'wrap'
  },
});


import React from 'react';
import { StyleSheet, View, Image, Text, } from 'react-native';
import { DefaultTheme, List } from 'react-native-paper';


function ContatoItem(props) {
  return (
    <Image
      source={{ uri: props.contato.capa }}
      style={{ width: 170, height: 150, margin: 10 }}
      onPress={() => { }}
    />
  )
}

export default function Contato() {
  return (
    <View style={styles.container}>
      <View >
        <List.Item
          title="Telefone"
          description="(47)3455-9876"
          left={props => <List.Icon {...props} icon="phone" />}
        />
        <List.Item
          title="WhatsApp"
          description="(47) 99272-8455"
          left={props => <List.Icon {...props} icon="whatsapp" />}
        />
        <List.Item
          title="Instagram"
          description="@Fabidecor"
          left={props => <List.Icon {...props} icon="instagram" />}
        />
        <List.Item
          title="E-mail"
          description="Fabidecor@gmail.com"
          left={props => <List.Icon {...props} icon="email" />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6a7ff',
    paddingTop: 30

  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap'

  },
});


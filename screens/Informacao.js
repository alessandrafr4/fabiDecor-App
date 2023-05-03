import React from 'react';
import { StyleSheet, View, Image, Text, } from 'react-native';
import { DefaultTheme, List } from 'react-native-paper';


function InformacaoItem(props) {
  return (
    <Image
      source={{ uri: props.informacao.capa }}
      style={{ width: 170, height: 150, margin: 10 }}
      onPress={() => { }}
    />
  )
}

export default function Informacao() {
  return (
    <View style={styles.container}>
      <View >
      <List.Item
          title="Agenda"
          description="segunda-feira à sábados, 8:00 às 19:00"
          left={props => <List.Icon {...props} icon="calendar-account" />}
        />
        <List.Item
          title="Pagamento"
          description="Dinheiro, Pix e Cartão"
          left={props => <List.Icon {...props} icon="cash" />}
        />
        <List.Item
          title="Cidades"
          description="Araquari, São Francisco, Barra do Sul e Joinville"
          left={props => <List.Icon {...props} icon="map-marker-radius" />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 30
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap'

  },
});
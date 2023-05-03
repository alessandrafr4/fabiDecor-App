import React from 'react';
import { StyleSheet, View, Image, Text, } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

function FormaturaItem(props) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: props.formatura.capa }}
        style={{ width: 170, height: 150, margin: 10 }}
        onPress={() => { }}
      />
      <Text style={{ color: '#0D0D0D' }}> {props.formatura.titulo} </Text>
    </View>

  )
}

export default function Formatura() {
  const formaturas = [
    {
      id: '1',
      capa: 'https://i.pinimg.com/736x/de/10/86/de10860de0ebfbdc451a92ba7fd18751.jpg',
      titulo: "Formatura",
    },
    {
      id: '2',
      capa: 'https://alphaconvites.com.br/wp-content/uploads/2023/01/4ff90287f1e75f09c1fa34c22615aa4b-1.jpg',
      titulo: "Formatura",
    },
    {
      id: '3',
      capa: 'https://i.pinimg.com/originals/16/79/42/16794229ac37d58dedc263387ad74532.jpg',
      titulo: "Formatura",
    },
    {
      id: '4',
      capa: 'https://www.festas.biz/wp-content/uploads/2019/12/festa-formatura-simples-2.jpg',
      titulo: "Formatura",
    },
    {
      id: '5',
      capa: 'https://www.decorfacil.com/wp-content/uploads/2018/05/20180510decoracao-de-formatura-57.jpg',
      titulo: "formatura",
    },
    {
      id: '6',
      capa: 'https://i.pinimg.com/550x/49/08/61/49086146f653b2ee06020c1fff54d929.jpg',
      titulo: "Formatura",
    },
    {
      id: '7',
      capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQsav9203WcrlcRwUu_yRWlhSzx-aek8O5Q&usqp=CAU',
      titulo: "Formatura",
    },
    {
      id: '8',
      capa: 'https://www.decorfacil.com/wp-content/uploads/2018/05/20180510decoracao-de-formatura-51.jpg',
      titulo: "Formatura",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.cardList}>

        {
          formaturas.map((formatura) => (
            <FormaturaItem formatura={formatura} key={formatura.id} />
          ))
        }

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
    flexDirection: 'column',
  },
  cardList: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  }

});

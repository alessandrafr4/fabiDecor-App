import React from 'react';
import { StyleSheet, View, Image, Text, } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

function AnivesarioItem(props) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: props.aniversario.capa }}
        style={{ width: 170, height: 150, margin: 10 }}
        onPress={() => { }}
      />
      <Text style={{ color: '#0D0D0D' }}> {props.aniversario.titulo} </Text>
    </View>

  )
}

export default function Aniversario() {
  const aniversarios = [
    {
      id: '1',
      capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUlJ46dfR5ICGVApYYfBCuuPvKgXVqa2esw&usqp=CAU',
      titulo: "Aniversario",
    },
    {
      id: '2',
      capa: 'https://www.tuacasa.com.br/wp-content/uploads/2019/10/festa-de-aniversario-00.jpg',
      titulo: "Aniversario",
    },
    {
      id: '3',
      capa: 'https://img.elo7.com.br/product/zoom/2854A1F/aniversario-e-festas-decoracao.jpg',
      titulo: "Aniversario",
    },
    {
      id: '4',
      capa: 'https://imagens-revista.vivadecora.com.br/uploads/2019/04/Festa-de-anivers%C3%A1rio-com-cactos-e-flores.-Fonte-Pinterest.jpg',
      titulo: "Aniversario",
    },
    {
      id: '5',
      capa: 'https://www.mundodasfestas.com.br/wp-content/uploads/2022/03/festa-de-aniversario-simples-00.png',
      titulo: "Aniversario",
    },
    {
      id: '6',
      capa: 'https://i.pinimg.com/736x/0a/a3/fe/0aa3fe586a82ae40dedb31175e5cf483.jpg',
      titulo: "Aniversario",
    },
    {
      id: '7',
      capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPzjAXAq9TeV5p1yexZai7BRrRuzI4Q0Lsg&usqp=CAU',
      titulo: "Aniversaio",
    },
    {
      id: '8',
      capa: 'https://i.pinimg.com/736x/40/f6/61/40f661d8a532486245c89b1b197046e5.jpg',
      titulo: "Aniversaio",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.cardList}>

        {
          aniversarios.map((aniversario) => (
            <AnivesarioItem aniversario={aniversario} key={aniversario.id} />
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

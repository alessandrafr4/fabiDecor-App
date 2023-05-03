import React from 'react';
import { StyleSheet, View, Image, Text, } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

function CasamentoItem(props) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: props.casamento.capa }}
        style={{ width: 170, height: 150, margin: 10 }}
        onPress={() => { }}
      />
      <Text style={{ color: '#0D0D0D' }}> {props.casamento.titulo} </Text>
    </View>

  )
}

export default function Casamento() {
  const casamentos = [
    {
      id: '1',
      capa: 'https://i.pinimg.com/originals/02/3d/78/023d786423a42e6958debd89fdd639da.jpg',
      titulo: "Casamento",
    },
    {
      id: '2',
      capa: 'https://i.pinimg.com/474x/0b/21/3f/0b213f99665427f66efae43873cef373.jpg',
      titulo: "Casamento",
    },
    {
      id: '3',
      capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6PyKpey2uBkNmrp9yZBNmd1K7kvA9IAUT6IWm193JmoQu1mR27hoiosoCiVa9f0ptgw&usqp=CAU',
      titulo: "Casamento",
    },
    {
      id: '4',
      capa: 'https://imagens-revista.vivadecora.com.br/uploads/2019/04/Festa-de-anivers%C3%A1rio-com-cactos-e-flores.-Fonte-Pinterest.jpg',
      titulo: "Casamento",
    },
    {
      id: '5',
      capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmNIM9B2FeVXppzOgfjTzmwsQQj0PZ3zpuA&usqp=CAU',
      titulo: "Casamento",
    },
    {
      id: '6',
      capa: 'https://cdn0.casamentos.com.br/vendor/3354/3_2/960/jpg/8fabeaa1-483f-4d4f-b4b5-a8ae69dee68b_13_123354-161677417645896.jpeg',
      titulo: "Casamento",
    },
    {
      id: '7',
      capa: 'https://cdn0.casamentos.com.br/vendor/1882/3_2/960/jpg/20210815-164616_13_361882-165715024344738.jpeg',
      titulo: "Casamento",
    },
    {
      id: '8',
      capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbouA6N0mEcPRcFO4Z7zCYaQWJfPntMPoRluMi0qUTWiPCsU2j2FJf-DHlrPN9TlO9M8o&usqp=CAU',
      titulo: "Casamento",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.cardList}>

        {
          casamentos.map((casamento) => (
            <CasamentoItem casamento={casamento} key={casamento.id} />
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

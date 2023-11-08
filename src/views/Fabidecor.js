import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function Fabidecor ({navigation}) {
  return  (
    <ScrollView style={styles.scrollView}>
      {/* <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Aniversario')}>
            Aniversario                        
          </Button>
        </Card.Content>
      </Card> */}
      {/* <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('')}>
            Casamento
          </Button>
        </Card.Content>
      </Card> */}
      {/* <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Formatura')}>
              Formatura
          </Button>
        </Card.Content>
      </Card>                 
      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Informacao')}>
            Informações                                                                                                                                                  
          </Button>
        </Card.Content>
      </Card> */}
      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Contato')}>
            Contato 
          </Button>
        </Card.Content>
      </Card>   
      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Avaliacao')}>
            Avaliações 
          </Button>
        </Card.Content>
      </Card>  
      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Categoria')}>
            Categoria 
          </Button>
        </Card.Content>
      </Card>  
      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Produto')}>
            Produto 
          </Button>
        </Card.Content>
      </Card>  
      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Tema')}>
            Tema 
          </Button>
        </Card.Content>
      </Card>  
      
      
                                               
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 20
  },
  card: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default Fabidecor
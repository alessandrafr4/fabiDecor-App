import { useEffect, useState, useCallback } from 'react';
import { Card, Text, FAB } from 'react-native-paper';
import { RefreshControl, StyleSheet, ScrollView, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import produtoService from '../services/produtos';
import { userState } from '../recoil/atoms/auth';

export default function ProdutoList({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const currentUserState = useRecoilValue(userState);

  const fetchProdutos = async () => {
    const data = await produtoService.getAllProdutos();
    setProdutos(data);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchProdutos();
    setRefreshing(false);
  }, []);
  // produto.capa

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {produtos.map(produto => (
          <Card style={styles.card} key={produto.id}>
            <Card.Content>
              <Text variant="Large">{produto.nome}</Text>
              <Text variant="bodyMedium">
                {produto.categoria.descricao} - {produto.tema.nome}
              </Text>
            </Card.Content>
            <Card.Cover
              style={styles.capa}
              source={{ uri: produto.capa?.file }}
            />
          </Card>
        ))}
      </ScrollView>
      {currentUserState.loggedIn && (
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate('ProdutoAdd')}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justfyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#C22C4C4',
  },
  
  card: {
    backgroundColor: '#600fab',
    width: '90%',
    height: 250,
    margin: 19,
  },
});
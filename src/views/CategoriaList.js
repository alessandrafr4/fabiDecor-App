import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text, Button, List } from "react-native-paper";

import categoriaService from "../services/categorias";
import { useEffect, useState } from "react";

export default function CategoriaAdd({ navigation }) {
  const [categorias, setCategorias] = useState([
    {
      id: 1,
      descricao: "Exemplo",
    },
  ]);

  const getCategorias = async () => {
    const data = await categoriaService.getAllCategorias();
    console.log(data)
    setCategorias(data);
  };

  useEffect(() => {
    getCategorias();
  }, []);

  const updateCategorias = async () => {
    await getCategorias();
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium"> Categorias De Decoração</Text>
      <>
        {categorias.map((categoria) => (
          // <List.Item key={categoria.id} title={categoria.descricao} />
          <Text variant="headlineMedium" key={categoria.id}> {categoria.descricao}</Text>
        ))}
      </>
      <View style={styles.buttons}>
        <Button
          icon="reload"
          mode="elevated"
          onPress={() => updateCategorias()}
        >
          Atualizar
        </Button>
        <Button
          icon="plus-box"
          mode="elevated"
          onPress={() => navigation.navigate("categoriaAdd")}
        >
          Adicionar
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },
});

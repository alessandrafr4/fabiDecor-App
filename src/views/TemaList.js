import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text, Button, List } from "react-native-paper";

import temaService from "../services/temas";
import { useEffect, useState } from "react";

export default function TemaAdd({ navigation }) {
  const [temas, setTemas] = useState([
    {
      id: 1,
      nome: "Exemplo",
    },
  ]);

  const getTemas = async () => {
    const data = await temaService.getAllTemas();
    console.log(data)
    setTemas(data);
  };

  useEffect(() => {
    getTemas();
  }, []);

  const updateTemas = async () => {
    await getTemas();
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium"> Temas De Decoração</Text>
      <>
        {temas.map((tema) => (
          // <List.Item key={tema.id} title={tema.} />
          <Text variant="headlineMedium" key={tema.id}> {tema.nome}</Text>
        ))}
      </>
      <View style={styles.buttons}>
        <Button
          icon="reload"
          mode="elevated"
          onPress={() => updateTemas()}
        >
          Atualizar
        </Button>
        <Button
          icon="plus-box"
          mode="elevated"
          onPress={() => navigation.navigate("TemaAdd")}
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

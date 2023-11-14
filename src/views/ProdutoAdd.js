import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import { useTheme } from "react-native-paper";

import temaService from "../services/temas";
import imageService from "../services/images";
import produtoService from "../services/produtos";

export default function ProdutoAdd({ navigation }) {
  const theme = useTheme();

  const [isFocus, setIsFocus] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
  const [produto, setProduto] = useState({
    nome: "",
    year: "",
    // rating: "",
    tema: null,
  });

  const [temas, setTemas] = useState([]);

  const getTemas = async () => {
    const data = await temaService.getAllTemas();
    setTemas(data);
  };

  useEffect(() => {
    getTemas();
  }, []);

  const save = async () => {
    const image = await imageService.uploadImage(file);
    setProduto((produto) => ({
      ...produto,
      cover_attachment_key: image.attachment_key,
    }));
    const data = await produtoService.saveProduto(produto);
    navigation.goBack();
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setFile(result.assets[0]);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={styles.image}
          onPress={pickImageAsync}
        />
      )}
      {!selectedImage && (
        <View style={styles.buttons}>
          <Button mode="contained" onPress={pickImageAsync}>
            Selecionar imagem
          </Button>
        </View>
      )}
      <View style={{ marginHorizontal: 10 }}>
        <TextInput
          label="Nome"
          style={{ marginBottom: 10 }}
          onChangeText={(text) =>
            setProduto((produto) => ({ ...produto, nome: text }))
          }
        />
        <TextInput
          label="Quantidade"
          style={{ marginBottom: 10 }}
          onChangeText={(text) =>
            setproduto((produto) => ({ ...produto, year: text }))
          }
        />
        <TextInput
          label="preco"
          style={{ marginBottom: 10 }}
          onChangeText={(text) =>
            setProduto((produto) => ({ ...produto,  text }))
          }
        />
        <Dropdown
          style={[
            styles.dropdown,
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
            isFocus && {
              borderBottomColor: theme.colors.primary,
              borderBottomWidth: 1.5,
            },
          ]}
          containerStyle={[
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
          ]}
          placeholderStyle={styles.placeholderStyle}
          itemContainerStyle={[
            {
              backgroundColor: theme.colors.surfaceVariant,
            },
          ]}
          selectedTextStyle={styles.selectedTextStyle}
          data={temas}
          maxHeight={300}
          labelField="name"
          valueField="id"
          placeholder={isFocus ? "..." : "Selecionar Um Tema"}
          value={produto.tema}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setProduto((produto) => ({ ...produto, tema: item.id }));
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.buttons}>
        <Button mode="contained" onPress={save}>
          Adicionar
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
  dropdown: {
    height: 55,
    borderBottomColor: "#000a",
    borderBottomWidth: 0.8,
    borderTopRadius: 4,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 14,
    color: "#000a",
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
  },
});

import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.contenedor}
    >
      <Text>Edita el archivo index.tsx para editar esta pantalla.</Text>
      <Text style={styles.texto}>Aprende a programar</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  }
})
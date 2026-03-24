import useTheme, { ColorScheme } from "@/hook/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  // Tema y estilos 
  const { toggleTheme, colors } = useTheme();
  const estilos = crearEstilos(colors);

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.contenido}>Bienvenido a mi aplicación.</Text>
      <Text style={estilos.contenido}>Aprende a programar</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={estilos.contenido}>Cambiar tema</Text>
      </TouchableOpacity>

    </View>
  );
}

const crearEstilos = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    contenedor: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      backgroundColor: colors.bg
    },
    contenido: {
      fontSize: 22,
      color: colors.text,
    }
  })
  return styles;
}


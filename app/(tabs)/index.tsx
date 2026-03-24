import useTheme from "@/hook/useTheme";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleTheme } = useTheme();
  return (
    <View    >
      <Text>Edita el archivo index.tsx. para editar esta pantalla.</Text>
      <Text>Aprende a programar</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text>Cambiar tema</Text>
      </TouchableOpacity>
    </View>
  );
}



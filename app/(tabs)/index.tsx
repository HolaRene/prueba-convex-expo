import { api } from "@/convex/_generated/api";
import useTheme from "@/hook/useTheme";
import { useQuery } from "convex/react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleTheme } = useTheme();

  const tareas = useQuery(api.tareas.obtenerTareas);
  console.log(tareas)

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



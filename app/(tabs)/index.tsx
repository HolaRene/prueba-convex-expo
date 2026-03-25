import { crearEstilosdeInicio } from "@/assets/estilos/inicio.estilos";
import Cabecera from "@/components/Cabecera";
import InputTarea from "@/components/InputTarea";
import useTheme from "@/hook/useTheme";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  // Tema y estilos 
  const { toggleTheme, colors } = useTheme();
  const estilosdeInicio = crearEstilosdeInicio(colors);
  return (
    <LinearGradient colors={colors.gradients.background} style={estilosdeInicio.container}>
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={estilosdeInicio.safeArea}>
        <Cabecera />
        <InputTarea />
      </SafeAreaView>
    </LinearGradient>
  );
}


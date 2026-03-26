
import { crearEstilosdeInicio } from "@/assets/estilos/inicio.estilos";
import useTheme from "@/hook/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

const EmptyState = () => {
    const { colors } = useTheme();

    const homeStyles = crearEstilosdeInicio(colors);

    return (
        <View style={homeStyles.emptyContainer}>
            <LinearGradient colors={colors.gradients.empty} style={homeStyles.emptyIconContainer}>
                <Ionicons name="clipboard-outline" size={60} color={colors.textMuted} />
            </LinearGradient>
            <Text style={homeStyles.emptyText}>Todavía no tienes tareas</Text>
            <Text style={homeStyles.emptySubtext}>Agrega tu primera tarea arriba para comenzar</Text>
        </View>
    );
};
export default EmptyState;
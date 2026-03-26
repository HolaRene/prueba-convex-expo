
import { crearEstilosdeInicio } from "@/assets/estilos/inicio.estilos";
import useTheme from "@/hook/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Text, View } from "react-native";

const LoadingSpinner = () => {
    const { colors } = useTheme();

    const homeStyles = crearEstilosdeInicio(colors);

    return (
        <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
            <View style={homeStyles.loadingContainer}>
                <ActivityIndicator size="large" color={colors.primary} />
                <Text style={homeStyles.loadingText}>Loading your todos...</Text>
            </View>
        </LinearGradient>
    );
};

export default LoadingSpinner;
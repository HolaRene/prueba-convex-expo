import { crearEstilosdeInicio } from '@/assets/estilos/inicio.estilos';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hook/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BorrarAplicacion = () => {
    // Tema y estilos 
    const { colors } = useTheme();
    const estilosdeConfiguracion = crearEstilosdeInicio(colors);

    const eleminarTodo = useMutation(api.tareas.eliminarTodasTareas)


    const manejarReseteoApp = () => {
        Alert.alert("Resetear la app", "🎈 Esta acción borrará permanentemente los datos, Esta acción no se puede deshacer.", [
            { text: "Cancelar", style: "cancel" },
            {
                text: "Borrar Todo", style: "destructive", onPress: async () => {
                    try {
                        const resultadosc = await eleminarTodo()
                        Alert.alert("App se ha reseteado", `Se borró correctamente ${resultadosc.deletedCount}, total de tareas ${resultadosc.deletedCount === 1 ? "" : "s"} Ya se reseteo!`)
                    } catch (error) {
                        console.log(error, "No se coompleto la acción de resetear la app")
                    }
                }
            }
        ])
    }

    return (
        <LinearGradient colors={colors.gradients.surface} style={estilos.contenedor}>
            <Text>BorrarAplicacion</Text>

            <TouchableOpacity style={[estilos.estiloBotonReset, { borderBottomWidth: 0 }]}
                onPress={manejarReseteoApp}
                activeOpacity={0.7}
            >
                <View style={estilos.contenedorIzquierdo}>
                    <LinearGradient colors={colors.gradients.danger} style={estilos.iconoContainer}>
                        <Ionicons name='trash' size={18} color={'#fff'} />
                    </LinearGradient>
                    <Text>Resetear app</Text>
                </View>
                <Ionicons name='chevron-forward' size={18} color={colors.textMuted} />
            </TouchableOpacity>
        </LinearGradient>
    )
}

const estilos = StyleSheet.create({
    contenedorIzquierdo: {
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: "transparent",
        borderRadius: 10,
        gap: 10
    },
    iconoContainer: {
        width: 35,
        height: 35,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12
    },
    contenedor: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        gap: 15
    },
    estiloBotonReset: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 12,
        borderRadius: 14,
    }
})

export default BorrarAplicacion
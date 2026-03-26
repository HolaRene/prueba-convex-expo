import { crearEstilosdeInicio } from '@/assets/estilos/inicio.estilos';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hook/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BarradeProgreso = () => {
    // Tema y estilos 
    const { colors, modeOscuro, toggleTheme } = useTheme();
    const estilosdeConfiguracion = crearEstilosdeInicio(colors);
    const tareas = useQuery(api.tareas.obtenerTareas);

    const tareasCompletadas = tareas ? tareas.filter((td) => td.completada).length : 0;
    const totalTareas = tareas ? tareas.length : 0;
    const tareasActivas = totalTareas - tareasCompletadas;

    return (
        <LinearGradient colors={colors.gradients.surface} style={styles.contenedor}>
            <Text style={estilosdeConfiguracion.subtitle}>Progreso</Text>
            <View style={{ marginTop: 5, gap: 12 }}>
                <LinearGradient colors={colors.gradients.background} style={[styles.contenedorStats, {
                    borderLeftColor: colors.primary
                }]}>
                    <View style={styles.contenedor}>
                        <LinearGradient colors={colors.gradients.primary} style={styles.iconoContainer}>
                            <Ionicons name='list' size={20} color={"#fff"} />
                        </LinearGradient>
                    </View>
                    <View>
                        <Text style={styles.numeroStats}> {totalTareas} </Text>
                        <Text style={styles.labelStats}>Total de tareas</Text>
                    </View>

                </LinearGradient>
                <LinearGradient colors={colors.gradients.background} style={[styles.contenedorStats, {
                    borderLeftColor: colors.success
                }]}>
                    <View style={styles.contenedor}>
                        <LinearGradient colors={colors.gradients.success} style={styles.iconoContainer}>
                            <Ionicons name='checkmark' size={20} color={"#fff"} />
                        </LinearGradient>
                    </View>
                    <View>
                        <Text style={styles.numeroStats}> {tareasCompletadas} </Text>
                        <Text style={styles.labelStats}>Tareas completadas</Text>
                    </View>

                </LinearGradient>
                <LinearGradient colors={colors.gradients.background} style={[styles.contenedorStats, {
                    borderLeftColor: colors.warning
                }]}>
                    <View style={styles.contenedor}>
                        <LinearGradient colors={colors.gradients.warning} style={styles.iconoContainer}>
                            <Ionicons name='time' size={20} color={"#fff"} />
                        </LinearGradient>
                    </View>
                    <View>
                        <Text style={styles.numeroStats}> {tareasActivas} </Text>
                        <Text style={styles.labelStats}>Tareas activas</Text>
                    </View>

                </LinearGradient>
            </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        padding: 14,
        borderRadius: 8,
        margin: 10,

    },
    contenedorStats: {
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftWidth: 4,
        borderLeftColor: '#007AFF',
        borderRadius: 8,
    },
    iconoContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12
    },
    numeroStats: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    labelStats: {
        fontSize: 14,
        color: '#666',
    }
})

export default BarradeProgreso
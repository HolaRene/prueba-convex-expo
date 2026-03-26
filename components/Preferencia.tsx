import { crearEstilosdeInicio } from '@/assets/estilos/inicio.estilos';
import useTheme from '@/hook/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

const Preferencia = () => {
    const [esAutoSync, setEsAutoSync] = useState(false);
    const [notificacionHabilitada, setNotificacionHabilitada] = useState(false);

    // Tema y estilos 
    const { colors, modeOscuro, toggleTheme } = useTheme();
    const estilosdePreferencia = crearEstilosdeInicio(colors);
    return (
        <LinearGradient colors={colors.gradients.surface} style={styles.contenedor}>
            <Text style={estilosdePreferencia.subtitle}>Preferencia</Text>
            <View style={styles.contenedorOpciones}>
                <View style={styles.contenedorIzquierdo}>
                    <LinearGradient colors={colors.gradients.primary} style={styles.iconoContainer}>
                        <Ionicons name='moon' size={20} color={"#fff"} />
                    </LinearGradient>
                    <Text>Modo Oscuro</Text>
                </View>
                <Switch value={modeOscuro} onValueChange={toggleTheme} thumbColor={'#fff'} trackColor={{ false: colors.border, true: colors.primary }}
                    ios_backgroundColor={colors.border}
                />
            </View>
            {/* Notificaciones */}
            <View style={styles.contenedorOpciones}>
                <View style={styles.contenedorIzquierdo}>
                    <LinearGradient colors={colors.gradients.warning} style={styles.iconoContainer}>
                        <Ionicons name='notifications' size={20} color={"#fff"} />
                    </LinearGradient>
                    <Text>Notificaciones</Text>
                </View>
                <Switch value={notificacionHabilitada} onValueChange={() => setNotificacionHabilitada(!notificacionHabilitada)} thumbColor={'#fff'} trackColor={{ false: colors.border, true: colors.warning }}
                    ios_backgroundColor={colors.border}
                />
            </View>
            {/* Sincronizar */}
            <View style={styles.contenedorOpciones}>
                <View style={styles.contenedorIzquierdo}>
                    <LinearGradient colors={colors.gradients.success} style={styles.iconoContainer}>
                        <Ionicons name='sync' size={20} color={"#fff"} />
                    </LinearGradient>
                    <Text>Sincronizar</Text>
                </View>
                <Switch value={esAutoSync} onValueChange={() => setEsAutoSync(!esAutoSync)} thumbColor={'#fff'} trackColor={{ false: "red", true: colors.success }}
                    ios_backgroundColor={colors.border}
                />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    contenedorOpciones: {
        padding: 5,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",

        borderRadius: 8,
    },
    iconoContainer: {
        width: 35,
        height: 35,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12
    },
    contenedorIzquierdo: {
        flexDirection: "row",
        alignItems: 'center'
    },
    labelStats: {
        fontSize: 14,
        color: '#666',
    }
})


export default Preferencia
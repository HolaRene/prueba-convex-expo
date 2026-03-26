import { crearEstilosdeInicio } from '@/assets/estilos/inicio.estilos';
import useTheme from '@/hook/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Configuracion() {
    const [esAutoSync, setEsAutoSync] = useState(false);
    const [notificacionHabilitada, setNotificacionHabilitada] = useState(false);

    // Tema y estilos 
    const { colors, modeOscuro, toggleTheme } = useTheme();
    const estilosdeConfiguracion = crearEstilosdeInicio(colors);


    return (
        <LinearGradient colors={colors.gradients.background} style={estilosdeConfiguracion.container}>
            <SafeAreaView style={estilosdeConfiguracion.safeArea}>
                <View style={estilosdeConfiguracion.header}>
                    <View style={estilosdeConfiguracion.titleContainer}>
                        <LinearGradient colors={colors.gradients.primary} style={estilosdeConfiguracion.iconContainer}>
                            <Ionicons name="settings" size={24} color={"#fff"} />
                        </LinearGradient>
                        <Text style={estilosdeConfiguracion.title}>Configuración</Text>
                    </View>
                </View>
                <ScrollView style={{
                    flex: 1,
                }}
                    showsVerticalScrollIndicator={false}>

                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Configuracion
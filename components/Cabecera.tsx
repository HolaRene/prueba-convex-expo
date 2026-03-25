import { crearEstilosdeInicio } from '@/assets/estilos/inicio.estilos';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hook/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const Cabecera = () => {

    // Tema y estilos 
    const { toggleTheme, colors } = useTheme();
    const estilosdeInicio = crearEstilosdeInicio(colors);

    const tareas = useQuery(api.tareas.obtenerTareas);

    const tareasCompletadas = tareas ? tareas.filter((td) => td.completada).length : 0;
    const totalTareas = tareas ? tareas.length : 0;
    const porcentajeCompletado = totalTareas > 0 ? (tareasCompletadas / totalTareas) * 100 : 0;
    return (
        <View style={estilosdeInicio.header}>

            <View style={estilosdeInicio.titleContainer}>
                <LinearGradient colors={colors.gradients.primary} style={estilosdeInicio.iconContainer}>
                    <Ionicons name='flash-outline' size={28} color={'#fff'} />
                </LinearGradient>

                <View style={estilosdeInicio.titleTextContainer}>
                    <Text style={estilosdeInicio.title}>Las tareas de hoy 😬</Text>
                    <Text style={estilosdeInicio.subtitle}>
                        {tareasCompletadas} de {totalTareas} completadas
                    </Text>
                </View>
            </View>
            <View style={estilosdeInicio.progressContainer}>
                <View style={estilosdeInicio.progressBarContainer}>
                    <View style={estilosdeInicio.progressBar}>
                        <LinearGradient colors={colors.gradients.success} style={[estilosdeInicio.progressFill, { width: `${porcentajeCompletado}%` }]} />
                    </View>
                    <Text style={estilosdeInicio.progressText}>{Math.round(porcentajeCompletado)}%</Text>
                </View>
            </View>

        </View>
    )
}

export default Cabecera
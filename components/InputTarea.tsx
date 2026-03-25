import { crearEstilosdeInicio } from '@/assets/estilos/inicio.estilos';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hook/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

const InputTarea = () => {
    // Tema y estilos 
    const { toggleTheme, colors } = useTheme();
    const estilosdeInicio = crearEstilosdeInicio(colors);
    // estados
    const [nuevaTd, setNuevaTd] = useState('')
    // mutación
    const nuevaTarea = useMutation(api.tareas.crearTarea);

    const manejarAgregarTarea = () => {
        if (nuevaTd.trim()) {
            try {
                nuevaTarea({ texto: nuevaTd.trim() });
                setNuevaTd('');
            } catch (error) {
                console.error('Error al agregar tarea:', error);
                Alert.alert('Error', 'No se pudo agregar la tarea. Inténtalo de nuevo.');
            }
        }
    }

    return (
        <View style={estilosdeInicio.inputSection}>
            <View style={estilosdeInicio.inputWrapper}>
                <TextInput style={estilosdeInicio.input} placeholder="Crea una nueva tarea..." value={nuevaTd} onChangeText={setNuevaTd} onSubmitEditing={manejarAgregarTarea} multiline placeholderTextColor={colors.textMuted} />
                <TouchableOpacity onPress={manejarAgregarTarea} activeOpacity={0.8} disabled={!nuevaTd.trim()}>
                    <LinearGradient colors={nuevaTd.trim() ? colors.gradients.primary : colors.gradients.muted} style={[estilosdeInicio.addButton, !nuevaTd.trim() && estilosdeInicio.addButtonDisabled]}>
                        <Ionicons name='add' size={28} color={'#fff'} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default InputTarea
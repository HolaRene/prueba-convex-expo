import { crearEstilosdeInicio } from "@/assets/estilos/inicio.estilos";
import Cabecera from "@/components/Cabecera";
import EmptyState from "@/components/EstadoVacio";
import InputTarea from "@/components/InputTarea";
import LoadingSpinner from "@/components/LoadingSpinner";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import useTheme from "@/hook/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { Alert, FlatList, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Tipado de tareas
type Tareas = Doc<"tareas">

export default function Index() {
  // Tema y estilos 
  const { colors } = useTheme();
  const estilosdeInicio = crearEstilosdeInicio(colors);

  const [editandoId, setEditandoId] = useState<Id<"tareas"> | null>(null);
  const [editandoTexto, setEditandoTexto] = useState('');

  const tareas = useQuery(api.tareas.obtenerTareas);
  const manejoCambio = useMutation(api.tareas.manejoTarea);
  const eliminarTarea = useMutation(api.tareas.eliminarTarea);
  const actualizarTarea = useMutation(api.tareas.actualizarTarea);

  const cargando = tareas === undefined;

  if (cargando) return <LoadingSpinner />;

  const menejorCambioEstado = async (id: Id<"tareas">) => {
    try {
      await manejoCambio({ id });
    } catch (error) {
      console.error("Error al cambiar el estado de la tarea:", error);
      Alert.alert("Error", "No se pudo cambiar el estado de la tarea. Por favor, intenta nuevamente.");
    }
  }
  const manejoEliminacion = async (id: Id<"tareas">) => {
    Alert.alert("Confirmar eliminación", "¿Estás seguro de que deseas eliminar esta tarea?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Eliminar", style: "destructive", onPress: async () => eliminarTarea({ id }) }

    ])
  }
  const manejoEdicion = (tarea: Tareas) => {
    setEditandoId(tarea._id);
    setEditandoTexto(tarea.texto);
  }
  const manejoGuardar = async () => {
    if (editandoId) {
      try {
        await actualizarTarea({ id: editandoId, texto: editandoTexto });
        setEditandoId(null);
        setEditandoTexto('');
      } catch (error) {
        console.error("Error al actualizar la tarea:", error);
        Alert.alert("Error", "No se pudo actualizar la tarea. Por favor, intenta nuevamente.");
      }
    }
  }
  const manejoCancelarEdicion = () => {
    setEditandoId(null);
    setEditandoTexto('');
  }

  const renderizarTarea = ({ item }: { item: Tareas }) => {
    const estaEditando = editandoId === item._id;
    return (
      <View style={estilosdeInicio.todoItemWrapper}>
        <LinearGradient colors={colors.gradients.surface}
          style={estilosdeInicio.todoItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity style={estilosdeInicio.checkbox} activeOpacity={0.7}
            onPress={() => menejorCambioEstado(item._id)}
          >
            <LinearGradient colors={item.completada ? colors.gradients.success : colors.gradients.muted}
              style={[
                estilosdeInicio.checkboxInner, {
                  borderColor: item.completada ? "transparent" : colors.border
                }
              ]}
            >
              {
                item.completada && <Ionicons name="checkmark" size={18} color={"#fff"} />
              }

            </LinearGradient>
          </TouchableOpacity>
          {
            estaEditando ? (
              <View style={estilosdeInicio.editContainer}>
                <TextInput
                  value={editandoTexto}
                  onChangeText={setEditandoTexto}
                  style={estilosdeInicio.editInput}
                  autoFocus
                  multiline
                  placeholder="Edita tu tarea"
                  placeholderTextColor={colors.textMuted}
                />
                <View style={estilosdeInicio.editButtons}>
                  <TouchableOpacity onPress={manejoGuardar} activeOpacity={0.8}>
                    <LinearGradient colors={colors.gradients.success} style={estilosdeInicio.editButton}>
                      <Ionicons name="checkmark" size={16} color={"#fff"} />
                      <Text style={estilosdeInicio.editButtonText}>Guardar</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={manejoCancelarEdicion} activeOpacity={0.8}>
                    <LinearGradient colors={colors.gradients.muted} style={estilosdeInicio.editButton}>
                      <Ionicons name="close" size={16} color={"#fff"} />
                      <Text style={estilosdeInicio.editButtonText}>Cancelar</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={estilosdeInicio.todoText}>
                <Text style={[
                  estilosdeInicio.todoText, item.completada && {
                    textDecorationLine: item.completada ? "line-through" : "none",
                    color: colors.textMuted,
                    opacity: 0.6
                  }]}>
                  {item.texto}
                </Text>
                <View style={estilosdeInicio.todoActions}>
                  {/* Acciones para la tarea, si las hay */}
                  <TouchableOpacity onPress={() => manejoEdicion(item)} activeOpacity={0.8}>
                    <LinearGradient colors={colors.gradients.warning} style={estilosdeInicio.actionButton}>
                      <Ionicons name="pencil" size={16} color={"#fff"} />
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => manejoEliminacion(item._id)} activeOpacity={0.8}>
                    <LinearGradient colors={colors.gradients.danger} style={estilosdeInicio.actionButton}>
                      <Ionicons name="trash" size={16} color={"#fff"} />
                    </LinearGradient>

                  </TouchableOpacity>
                </View>
              </View>
            )
          }
        </LinearGradient>
      </View>
    )
  }

  return (
    <LinearGradient colors={colors.gradients.background} style={estilosdeInicio.container}>
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={estilosdeInicio.safeArea}>
        <Cabecera />
        <InputTarea />
        <FlatList
          data={tareas}
          renderItem={renderizarTarea}
          keyExtractor={(item) => item._id}
          style={estilosdeInicio.todoList}
          contentContainerStyle={estilosdeInicio.todoListContent}
          ListEmptyComponent={<EmptyState />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}


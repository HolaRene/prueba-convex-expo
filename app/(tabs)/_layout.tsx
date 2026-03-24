import useTheme from '@/hook/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
    const { colors } = useTheme()

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.textMuted,
            tabBarStyle: {
                backgroundColor: colors.surface,
                borderTopWidth: 2,
                borderTopColor: colors.border,
                height: 90,
                paddingBottom: 5,
            },
            tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: "bold",
            },
            headerShown: false,
        }}>
            <Tabs.Screen name="index" options={{
                title: "Tareas",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="flash-outline" size={size} color={color} />
                )
            }}

            />
            <Tabs.Screen name="configuracion" options={{
                title: "Configuración", tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" size={size} color={color} />
                )
            }} />
        </Tabs>)
}

export default TabsLayout
import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from '@/constants/Colors';

const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.light.tint,
        tabBarStyle: {
            backgroundColor: Colors.dark.tabIconSelected,
            height: 80
        },
     }}>
        <Tabs.Screen
        name='home'
        options={{
            title : "Messages",
            headerShown: false,
            tabBarIcon: ({ focused,color, size }) => <MaterialCommunityIcons size={32} name="chat-processing" color={color} />,
            tabBarLabelStyle: {
                fontSize: 15,
                fontWeight: '200',
                color:Colors.light.tabIconDefault
              },
        }}
        />
         <Tabs.Screen
        name='calls'
        options={{
            title : "Calls",
            headerShown: false,
            tabBarIcon: ({ focused,color, size }) => <MaterialCommunityIcons name="phone-in-talk" size={32} color={color} />,
            tabBarLabelStyle: {
                fontSize: 15,
                fontWeight: '200',
                color:Colors.light.tabIconDefault
              },
              tabBarVisible: false
        }}
        />
         <Tabs.Screen
        name='contacts'
        options={{
            title : "Contacts",
            headerShown: false,
            tabBarIcon: ({ focused,color, size }) => <MaterialCommunityIcons size={32} name="contacts" color={color} />,
            tabBarLabelStyle: {
                fontSize: 15,
                fontWeight: '200',
                color:Colors.light.tabIconDefault
              },
        }}
        />
         <Tabs.Screen
        name='settings'
        options={{
            title : "Settings",
            headerShown: false,
            tabBarIcon: ({ focused,color, size }) => <FontAwesome size={32} name="cog" color={color} />,
            tabBarLabelStyle: {
                fontSize: 15,
                fontWeight: '200',
                color:Colors.light.tabIconDefault
              },
        }}
        />
    </Tabs>
  )
}

export default _layout
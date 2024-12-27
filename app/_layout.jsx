import { View, Text } from 'react-native'
import React from 'react'
import { Stack,Redirect } from 'expo-router';
//import { useAuth } from '@/src/provider/AuthProvider'

const StackLayout = () => {
  //const { isAuthenticated } = useAuth()
const isAuthenticated = true;
  // if (isAuthenticated == true) {
  //   return <Redirect href="/contacts" />;
  // }
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options= {{headerShown: false }}/>
      <Stack.Screen name='signup'
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}

      />
    </Stack>
  )
}

export default StackLayout;
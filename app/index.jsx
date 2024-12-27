import { View, Text } from 'react-native'
import React from 'react'
import { Link, Redirect, router } from 'expo-router';

const StartPage = () => {
  return (
    /* Redirect to (tabs) home page */
    <Redirect href= "/loginPhone" />
  )
}

export default StartPage;
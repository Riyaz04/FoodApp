import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './Welcome'
import SignUp from './SignUp'
import Login from './Login'
import Home from '../Home'

const Stack = createNativeStackNavigator()
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Welcomepage'>
      <Stack.Screen
        name="Welcomepage"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
        />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigation

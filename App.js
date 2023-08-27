import React, { useState } from "react";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import LoginScreen from './src/Screens/LoginScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  })
}

const AuthStack = createNativeStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if(!isReady) {
    return (
      <AppLoading 
      startAsync={loadApplication}
      onFinish={() => setIsReady(true)}
      onError={console.warn}/>
    )
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator>

        <AuthStack.Screen options={{ headerShown: false }} name="Registration" component={<RegistrationScreen/>} />
        <AuthStack.Screen options={{ headerShown: false }} name="Login" component={<LoginScreen/>} />

      </AuthStack.Navigator>
    </NavigationContainer>
  )
}
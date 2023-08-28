import React, { useState } from "react";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import LoginScreen from './src/Screens/Auth/LoginScreen';
import RegistrationScreen from './src/Screens/Auth/RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { loadApplication } from "./src/FontLoader";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PostsScreen from "./src/Screens/Home/PostsScreen";
import CreatePostsScreen from "./src/Screens/Home/CreatePostsScreen";
import ProfileScreen from "./src/Screens/Home/ProfileScreen";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

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
      <MainTab.Navigator>
        <MainTab.Screen name="Posts" component={<PostsScreen/>} />
        <MainTab.Screen name="CreatePosts" component={<CreatePostsScreen/>} />
        <MainTab.Screen name="ProfileScreen" component={<ProfileScreen/>} />
      </MainTab.Navigator>
    </NavigationContainer>
  )
}

// auth 

{/* <AuthStack.Navigator>

<AuthStack.Screen options={{ headerShown: false }} name="Registration" component={<RegistrationScreen/>} />
<AuthStack.Screen options={{ headerShown: false }} name="Login" component={<LoginScreen/>} />

</AuthStack.Navigator> */}
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import LoginScreen from "./Screens/Auth/LoginScreen";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import PostsScreen from "./Screens/Home/PostsScreen";
import CreatePostsScreen from "./Screens/Home/CreatePostsScreen";
import ProfileScreen from "./Screens/Home/ProfileScreen";

import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

export const useRoute = (isAuth) => {
    if (!isAuth) {
        return (
            <Stack.Navigator initialRouteName="Login" options={{ headerShown: false }}>
                <>
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen
                      name="Registration"
                      component={RegistrationScreen}
                      options={{ headerShown: false }}
                    />
                </>
            </Stack.Navigator>
        )
    }
  
    return (
        <Tab.Navigator>
            <Tab.Screen name="Публікації" component={PostsScreen} options={{
                tabBarIcon: ({ focused, size, color }) => (
                    <View style={[{ backgroundColor: focused ? '#FF6C00' : 'transparent' }, styles.orangeSurround]}>
                        <AntDesign name="appstore-o" size={18} color={focused ? 'white' : 'grey'} />
                    </View>
                ),
                tabBarLabel: '', 
                headerRight: () => <Feather name="log-out" size={24} color="#DCDCDC" style={{ marginRight: 20 }} />,
            }} />
            <Tab.Screen name="Створити публікацію" component={CreatePostsScreen} options={{
                tabBarIcon: ({ focused, size, color }) => (
                    <View style={[{ backgroundColor: focused ? '#FF6C00' : 'transparent' }, styles.orangeSurround]}>
                        <AntDesign name="plus" size={20} color={focused ? 'white' : 'grey'} />
                    </View>
                ),
                tabBarLabel: '', 
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ focused, size, color }) => (
                    <View style={[{ backgroundColor: focused ? '#FF6C00' : 'transparent' }, styles.orangeSurround]}>
                        <Ionicons name="person-outline" size={20} color={focused ? 'white' : 'grey'} />
                    </View>
                ),
                tabBarLabel: '', 
            }} />
        </Tab.Navigator>
    )
    
}


const styles = StyleSheet.create({
    orangeSurround: {
        borderRadius: 17,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 6,
    },
})
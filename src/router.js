// // router.js
// import React from "react";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View, StyleSheet } from "react-native";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// import LoginScreen from "./Screens/Auth/LoginScreen";
// import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
// import PostsScreen from "./Screens/Home/PostsScreen";
// import CreatePostsScreen from "./Screens/Home/CreatePostsScreen";
// import ProfileScreen from "./Screens/Home/ProfileScreen";
// import MapScreen from "./Screens/Home/Nested Screens/MapScreen";
// import DefaultPostsScreen from "./Screens/Home/Nested Screens/DefaultPostsScreen";

// import { AntDesign } from '@expo/vector-icons'; 
// import { Ionicons } from '@expo/vector-icons'; 
// import { Feather } from '@expo/vector-icons'; 
// import { Entypo } from '@expo/vector-icons'; 

// export const useRoute = (isAuth) => {
//     if (!isAuth) {
//         return (
//             <Stack.Navigator initialRouteName="Login" options={{ headerShown: false }}>
//                 <>
//                     <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//                     <Stack.Screen
//                       name="Registration"
//                       component={RegistrationScreen}
//                       options={{ headerShown: false }}
//                     />
//                     <Stack.Screen name="MapScreen" component={MapScreen}
//                     options={{ headerShown: false }}/>
//                 </>
//             </Stack.Navigator>
//         )
//     }
  
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="DefaultPostsScreen" component={DefaultPostsScreen} options={{
//                 tabBarIcon: ({ focused, size, color }) => (
//                     <View style={[{ backgroundColor: focused ? '#FF6C00' : 'transparent' }, styles.orangeSurround]}>
//                         <AntDesign name="appstore-o" size={18} color={focused ? 'white' : 'grey'} />
//                     </View>
//                 ),
//                 tabBarLabel: '', 
//                 headerRight: () => <Feather name="log-out" size={24} color="#DCDCDC" style={{ marginRight: 20 }} />,
//             }} />
//             <Tab.Screen name="Створити публікацію" component={CreatePostsScreen} options={{
//                 tabBarIcon: ({ focused, size, color }) => (
//                     <View style={[{ backgroundColor: focused ? '#FF6C00' : 'transparent' }, styles.orangeSurround]}>
//                         <AntDesign name="plus" size={20} color={focused ? 'white' : 'grey'} />
//                     </View>
//                 ),
//                 tabBarLabel: '', 
//             }} />
//             <Tab.Screen name="Profile" component={ProfileScreen} options={{
//                 tabBarIcon: ({ focused, size, color }) => (
//                     <View style={[{ backgroundColor: focused ? '#FF6C00' : 'transparent' }, styles.orangeSurround]}>
//                         <Ionicons name="person-outline" size={20} color={focused ? 'white' : 'grey'} />
//                     </View>
//                 ),
//                 tabBarLabel: '', 
//             }} />
//             {/* <Tab.Screen name="MapScreen" component={MapScreen} options={{
//                 tabBarIcon: ({ focused, size, color }) => (
//                     <View style={[{ backgroundColor: focused ? '#FF6C00' : 'transparent' }, styles.orangeSurround]}>
//                         <Entypo name="map" size={20} color={focused ? 'white' : 'grey'} />
//                     </View>
//                 ),
//                 tabBarLabel: '', 
//             }}/> */}
//         </Tab.Navigator>
//     )
    
// }

// const styles = StyleSheet.create({
//     orangeSurround: {
//         borderRadius: 17,
//         paddingTop: 5,
//         paddingBottom: 5,
//         paddingLeft: 20,
//         paddingRight: 20,
//         marginTop: 6,
//     },
// })

// router.js
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import LoginScreen from "./Screens/Auth/LoginScreen";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import CreatePostsScreen from "./Screens/Home/CreatePostsScreen";
import ProfileScreen from "./Screens/Home/ProfileScreen";
import PostsScreen from "./Screens/Home/PostsScreen";
import MapScreen from "./Screens/Home/Nested Screens/MapScreen";

import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="PostsScreen" component={PostsScreen} options={{
        tabBarIcon: ({ focused, size, color }) => (
          <View style={[{ backgroundColor: focused ? '#FF6C00' : 'transparent' }, styles.orangeSurround]}>
            <AntDesign name="appstore-o" size={18} color={focused ? 'white' : 'grey'} />
          </View>
        ),
        tabBarLabel: '',
        headerRight: () => <Feather name="log-out" size={24} color="#DCDCDC" style={{ marginRight: 20 }} />,
      }} />
      <Tab.Screen name="CreatePostsScreen" component={CreatePostsScreen} options={{
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
  );
};

const styles = StyleSheet.create({
  orangeSurround: {
    borderRadius: 17,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 6,
  },
});
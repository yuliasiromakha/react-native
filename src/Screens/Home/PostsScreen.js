// Home/PostsScreen.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DefaultPostsScreen from '../Home/Nested Screens/DefaultPostsScreen'
import MapScreen from "./Nested Screens/MapScreen";

const Stack = createNativeStackNavigator();

const PostsScreen = () => {
  return (
    <Stack.Navigator initialRouteName="MapScreen">
      <Stack.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default PostsScreen;

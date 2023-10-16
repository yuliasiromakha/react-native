// Home/Nested Screens/ DefaultPostsScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image  } from "react-native";
// import { useNavigation } from '@react-navigation/native';

const DefaultPostsScreen = ({ route, navigation }) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      if (route.params && route.params.photo) {
        setPosts((prevState) => [...prevState, route.params.photo]);
      }
    }, [route.params]);
  
    return (
      <View style={styles.container}>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10, justifyContent: "center", alignItems: 'center' }}>
              <Image source={{ uri: item.photo }} style={{ width: 400, height: 240, 
                backgroundColor: 'black' 
                }} />
            </View>
          )}
        />
  
        <TouchableOpacity style={styles.rerouteBtn} onPress={() => navigation.navigate('MapScreen')}>
          <Text style={styles.rerouteText}>Maps</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        // alignItems: "center",
    },
    rerouteText: {
        color: "#FF6C00",
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: "auto"
    }
})

export default DefaultPostsScreen;

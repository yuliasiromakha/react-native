import { View, Text, StyleSheet } from "react-native"

const PostsScreen = () => { 
    return (
        <View style={styles.container}>
            <Text>Posts Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",    
    },
})

export default PostsScreen; 
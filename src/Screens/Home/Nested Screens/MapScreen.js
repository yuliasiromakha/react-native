// Home/Nested Screens/ MapScreen.js
import { View, Text, StyleSheet } from "react-native"
import MapView, {Marker} from 'react-native-maps'

const MapScreen = () => { 
    return (
        <View style={styles.container}>
            <MapView 
            style={{flex: 1}} 
            initialRegion={{
                latitude: 37.785834, 
                longitude: -122.406417, 
                latitudeDelta: 0.1, 
                longitudeDelta: 0.1}} > 
            </MapView>
            <Marker coordinate={{latitude: 37.785834, longitude: -122.406417, }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
})

export default MapScreen; 
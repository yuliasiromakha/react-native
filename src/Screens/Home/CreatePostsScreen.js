//CreatePostsScreen.js
import react, {useEffect, useState} from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native"
import { Camera, CameraType } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons'; 
import * as Location from 'expo-location'

const CreatePostsScreen = ({ navigation }) => { 
    const [camera, setCamera] = useState(null)
    const [photo, setPhoto] = useState(null) 

    const takePicture = async () => {
        const photo = await camera.takePictureAsync()
        const location = await Location.getCurrentPositionAsync()
        console.log('longtitude location => ', location.coords.longitude);
        console.log('latitude location => ', location.coords.latitude);
        setPhoto(photo.uri)
        console.log("photo => ", photo);
    }

    const sendPhoto = () => {
        console.log('navigation =>', navigation);
        navigation.navigate('DefaultPostsScreen', {photo})
    }

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
        //   let location = await Location.getCurrentPositionAsync({});
        //   setLocation(location);
        })();
      }, []);

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={setCamera}>
                {photo && 
                <View style={styles.takePhotoContainer}>
                    <Image source={{uri: photo}} style={{height: 240, width: 400}} />
                </View>}
                <TouchableOpacity onPress={takePicture}>
                    <View style={styles.cameraPosition}>
                    <Ionicons name="ios-camera-sharp" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            </Camera>
            <Text style={styles.editPhotoText} >Редагувати фото</Text>

            <View style={styles.form} >
                <TextInput placeholder="Назва..." style={styles.input} ></TextInput>
                <TextInput placeholder="Місцевість..." style={styles.input} ></TextInput>
            </View>

            <TouchableOpacity style={styles.publishButton} onPress={sendPhoto}>
                  <Text style={styles.btnText}>Опублікувати</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 40,
        backgroundColor: "#FFFFFF",
    },
    camera: {
        height: 240,
        justifyContent: "center",
        borderRadius: 8,
    },
    cameraPosition: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#FFFFFF4D",
        marginLeft: "auto",
        marginRight: "auto",
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    takePhotoContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        borderColor: "white",
        borderWidth: 1,

    },
    editPhotoText: {
        fontSize: 16,
        color: "#BDBDBD",
        textAlign: "left",
        marginTop: 8,
    },
    form: {
        marginTop: 70,
        gap: 15,
    },
    input: {
        height: 50,
        width: 343,
        marginHorizontal: 20,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        // paddingLeft: 20,
    },
    publishButton: {
        marginTop: 40,
        width: 343,
        height: 50,
        backgroundColor: "#FF6C00",
        borderRadius: 40,
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
    },
    
      btnText: {
        color: "white",
        textAlign: "center",
        fontSize: 17,
    },
})

export default CreatePostsScreen; 
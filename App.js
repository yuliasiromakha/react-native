// cd second-react-native-hw
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Platform,
} from "react-native";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const initialState = {
  username: '',
  email: '',
  password: '',
} 

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  })
}

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);
  
  const onRegister = () => {
    setState(initialState);
    console.log(`Information about user
    username: ${state.username}, 
    email: ${state.email}, 
    password: ${state.password}` );
  };

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
    setIsKeyboardShown(false);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./src/images/mainBackground.png")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={{...styles.registrationDiv, top: isKeyboardShown ? 165 : 320}}>
              <View style={styles.addPhoto}>
                <Image
                  style={styles.addPhotoIcon}
                  source={require("./src/images/add.png")}
                />
              </View>
              <View style={styles.formSection}>
                <Text style={styles.registrationText}>Реєстрація</Text>

                <TextInput style={styles.input} placeholder="Логін" value={state.username}
                  onFocus={() => {
                    setIsKeyboardShown(true);
                  }}
                  onBlur={() => {
                    setIsKeyboardShown(false);
                  }}
                  onChangeText={(value) => setState((prevState) => ({...prevState, username: value}))}
                />

                <TextInput style={styles.input} placeholder="Адреса електронної пошти" value={state.email}
                  onFocus={() => {
                    setIsKeyboardShown(true);
                  }}
                  onBlur={() => {
                    setIsKeyboardShown(false);
                  }}
                  onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}

                />
                <TextInput style={styles.input} placeholder="Пароль" secureTextEntry={!showPassword} value={state.password}
                  onFocus={() => {
                    setIsKeyboardShown(true);
                  }}
                  onBlur={() => {
                    setIsKeyboardShown(false);
                  }}
                  onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
                />

                <TouchableOpacity
                  style={styles.showHideButton}
                  onPress={() => setShowPassword(!showPassword)}
                  onFocus={() => {
                    setIsKeyboardShown(true);
                  }}
                >
                  <Text style={styles.showHideText}>
                    {showPassword ? "Приховати" : "Показати"}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonSection}>
                <TouchableOpacity style={styles.registrationButton} onPress={onRegister}>
                  <Text style={styles.btnText}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rerouteBtn}>
                  <Text style={styles.rerouteText}>
                    Вже є акаунт? Увійти
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },

  image: {
    flex: 1,
    alignItems: "center",
  },

  registrationText: {
    fontSize: 30,
    fontWeight: 700, 
    textAlign: "center",
    marginBottom: 0,
    bottom: 20,
    fontFamily: 'Roboto-Medium',
    fontWeight: 500,
  },

  registrationDiv: {
    backgroundColor: "white",
    alignItems: "center",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    flex: 1,
    height: 200,
    width: "100%",
    paddingRight: 20,
    paddingLeft: 20,
  },

  addPhoto: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    bottom: 60,
    borderRadius: 25,
    marginBottom: 0,
    marginTop: 0,
  },

  addPhotoIcon: {
    width: 27,
    height: 27,
    marginLeft: 105,
    marginTop: 75,
  },

  formSection: {
    gap: 18,
  },

  buttonSection: {
    marginTop: 20,
  },

  input: {
    width: 385,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#E8E8E8",
    height: 60,
    fontSize: 18,
    backgroundColor: "#F6F6F6",
  },
  
  registrationButton: {
    marginTop: 0,
    width: 343,
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 40,
    justifyContent: "center",
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },

  rerouteBtn: {
    marginTop: 20,
    alignItems: "center",
  },

  rerouteText: {
    fontSize: 16,
    color: "#1B4371",
  },

  rerouteLoginText: {
    textDecorationLine: "underline",
  },

  showHideButton: {
    position: 'absolute',
    right: 20,
    top: 230,
},

  showHideText: {
    color: "#1B4371",
    fontSize: 18,
  },

});
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
import AppLoading from 'expo-app-loading';
import { loadApplication } from "../../FontLoader";

const initialState = {
  email: '',
  password: '',
} 

const LoginScreen = ({navigation}) => {
  console.log('navigation:', navigation);
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
    setIsKeyboardShown(false);
  };

  const onLogin = () => {
    setState(initialState);
    console.log(`Information about user
    email: ${state.email}, 
    password: ${state.password}`);
  };

  if(!isReady) {
    return <AppLoading 
     startAsync={loadApplication}
     onFinish={() => setIsReady(true)} 
     onError={console.warn} />
  }

  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/mainBackground.png")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
          >

            <View style={{...styles.registrationDiv, top: isKeyboardShown ? 330 : 380}}>

              <View style={styles.formSection}>
                <Text style={styles.registrationText}>Увійти</Text>
                <TextInput style={styles.input} placeholder="Адреса електронної пошти" value={state.email}
                  onFocus={() => {
                    setIsKeyboardShown(true);
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
                <TouchableOpacity style={styles.showHideButton} onPress={() => setShowPassword(!showPassword)}
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

                <TouchableOpacity style={styles.registrationButton} onPress={onLogin}>
                  <Text style={styles.btnText}>Увійти</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.rerouteBtn} onPress={() => navigation.navigate('Registration')}>
                  <Text style={styles.rerouteText}>
                    Немає акаунту?
                    <Text style={styles.rerouteLoginText}>Зареєструватись</Text>
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
    marginTop: 40,
    fontWeight: 700, 
    textAlign: "center",
    marginBottom: 20,
  },

  registrationDiv: {
    backgroundColor: "white",
    alignItems: "center",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    flex: 1,
    height: 200,
    top: 380,
    width: "100%",
    paddingRight: 20,
    paddingLeft: 20,
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
    marginTop: 30,
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
    top: 210,
},

  showHideText: {
    color: "#1B4371",
    fontSize: 18,
  },

});

export default LoginScreen;
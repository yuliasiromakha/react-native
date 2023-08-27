import * as Font from 'expo-font';

export const loadApplication = async () => {
  await Font.loadAsync({
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
  });
};
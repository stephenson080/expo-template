import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';

import Loader from './components/Helpers/Loader';
import Main from './navigation/sections/main';

import { store } from "./appStore/store";



export default function App() {
  let [fontsLoaded] = useFonts({
    FONT_Black: require("./assets/fonts/Gilroy/Gilroy-Black.ttf"),
    FONT_Black_Italic: require("./assets/fonts/Gilroy/Gilroy-BlackItalic.ttf"),
    FONT_Bold: require("./assets/fonts/Gilroy/Gilroy-Bold.ttf"),
    FONT_Bold_Italic: require("./assets/fonts/Gilroy/Gilroy-BoldItalic.ttf"),
    FONT_Semi_Bold: require("./assets/fonts/Gilroy/Gilroy-SemiBold.ttf"),
    FONT_Semi_Bold_Italic: require("./assets/fonts/Gilroy/Gilroy-SemiBold.ttf"),
    FONT_Light: require("./assets/fonts/Gilroy/Gilroy-Light.ttf"),
    FONT_Light_Italic: require("./assets/fonts/Gilroy/Gilroy-LightItalic.ttf"),
    FONT_Medium: require("./assets/fonts/Gilroy/Gilroy-Medium.ttf"),
    FONT_Medium_Italic: require("./assets/fonts/Gilroy/Gilroy-MediumItalic.ttf"),
    FONT_Regular: require("./assets/fonts/Gilroy/Gilroy-Regular.ttf"),
    FONT_Regular_Italic: require("./assets/fonts/Gilroy/Gilroy-RegularItalic.ttf"),
    FONT_Thin: require("./assets/fonts/Gilroy/Gilroy-Thin.ttf"),
    FONT_Thin_Italic: require("./assets/fonts/Gilroy/Gilroy-ThinItalic.ttf"),
    HOUSC_Regular: require("./assets/fonts/Housck/HouschkaRoundedAlt-Regular2.ttf"),
  });

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Main />
          <StatusBar style="auto" />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

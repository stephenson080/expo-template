import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ParamListBase,
  RouteProp,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import HomeIndexScreen from "../../screens/home/index.screen";
import HomeScreen from "../../screens/home/home.screen";
// import { StyleSheet, Pressable } from "react-native";




const { Navigator, Screen } = createNativeStackNavigator();

type NavigationProps = {
  route: RouteProp<ParamListBase>;
  navigation: any;
};

export default function HomeStack(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
          <Screen name="home-page" component={HomeScreen} />
          <Screen name="home-index" component={HomeIndexScreen} />
        </Navigator>
    )
}
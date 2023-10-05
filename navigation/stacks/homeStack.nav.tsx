import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ParamListBase,
  RouteProp,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import HomeIndexScreen from "../../screens/home/index.screen";
// import { StyleSheet, Pressable } from "react-native";




const { Navigator, Screen } = createNativeStackNavigator();

type NavigationProps = {
  route: RouteProp<ParamListBase>;
  navigation: any;
};

export default function HomeStack(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="home-index" component={HomeIndexScreen} />
        </Navigator>
    )
}
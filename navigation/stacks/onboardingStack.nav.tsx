import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ParamListBase,
  RouteProp,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import HomeIndexScreen from "../../screens/home/index.screen";
import OnboardingIndexScreen from "../../screens/onboarding/index.screen";
import OnboardLoginScreen from "../../screens/onboarding/onboard-login.screen";
// import { StyleSheet, Pressable } from "react-native";


const { Navigator, Screen } = createNativeStackNavigator();

type NavigationProps = {
  route: RouteProp<ParamListBase>;
  navigation: any;
};

export default function OnboardingStack(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="onboard-index" component={OnboardingIndexScreen} />
            <Screen name="onboard-login" component={OnboardLoginScreen} />
        </Navigator>
    )
}
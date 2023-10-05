import {
  ParamListBase,
  RouteProp,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import HomeStack from "../stacks/homeStack.nav";

// import OnboardStack from "../stacks/onboardingStack";
// import DashboardSection from "./dashboard";


type NavigationProps = {
    route: RouteProp<ParamListBase>;
    navigation: any;
};

export default function Main(){

  return <HomeStack />
}
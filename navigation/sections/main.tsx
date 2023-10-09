import {
  ParamListBase,
  RouteProp,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import HomeStack from "../stacks/homeStack.nav";
import OnboardingStack from "../stacks/onboardingStack.nav";
import { useAppSelector } from "../../appStore/storeHooks";

// import OnboardStack from "../stacks/onboardingStack";
// import DashboardSection from "./dashboard";


type NavigationProps = {
    route: RouteProp<ParamListBase>;
    navigation: any;
};

export default function Main(){
  const {isLoggedIn} = useAppSelector(state => state.user)
  return isLoggedIn ? <HomeStack /> : <OnboardingStack />
}
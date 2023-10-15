import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import SubcriptionsIndexScreen from "../../screens/Subcriptions/index.screen";
import AddPaymentMethodScreen from "../../screens/Subcriptions/add-method.screen";
import ConfirmationScreen from "../../screens/Subcriptions/confirmation.screen";
import HealthPlanScreen from "../../screens/Subcriptions/health-plan.screen";
import TransactionScreen from "../../screens/Subcriptions/statements.screen";
// import { StyleSheet, Pressable } from "react-native";




const { Navigator, Screen } = createNativeStackNavigator();

type NavigationProps = {
  route: RouteProp<ParamListBase>;
  navigation: any;
};

export default function SubcriptionStack(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
          <Screen name="sub-index" component={SubcriptionsIndexScreen} />
          <Screen name="add-method" component={AddPaymentMethodScreen} />
          <Screen name="confirmation" component={ConfirmationScreen} />
          <Screen name="health-plans" component={HealthPlanScreen} />
          <Screen name="statement" component={TransactionScreen} />
        </Navigator>
    )
}
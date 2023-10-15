import { useEffect, useState } from "react";
import { View, StyleSheet, ColorSchemeName, Appearance } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import {
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";

import { Colors, Gilroy_FONTS, Poppins_FONTS, plans } from "../../utils/constants";
import CustomText from "../../components/Helpers/CustomText";

import { useAppDispatch } from "../../appStore/storeHooks";
import { SET_PLAN } from "../../appStore/reducers/userReducer";

import Success from "../../assets/svgs/success.svg";


type NavigationProps = {
  route: RouteProp<ParamListBase>;
  navigation: any;
};

export default function ConfirmationScreen({
  navigation,
  route,
}: NavigationProps) {
  const { plan, method }: any = route.params;
  const [background, setBackground] = useState(Appearance.getColorScheme());

  const dispatch = useAppDispatch()
  useEffect(() => {
    Appearance.addChangeListener(() => {
      getTheme();
    });
    return () => {
      clearTimeout(timer)
    }
  }, []);


  useEffect(() => {
    updatePlanStatus()
  }, []);

  const timer = setTimeout(() => {
    navigation.navigate('sub-index')
  }, 4000);

  function isDark() {
    return background === "dark";
  }

  function updatePlanStatus(){
    const _plan = plans.find(p => p.id === plan.id)
    if (_plan){
      let p = {..._plan}
      p.status = 'active'
      dispatch(SET_PLAN(p))
    }
  }

  function getTheme() {
    const _colorScheme = Appearance.getColorScheme();
    setBackground(_colorScheme);
  }
  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <View>
        <Success />
      </View>
      <Icon
        style={{ marginVertical: 15 }}
        name="lock-closed-outline"
        color={"white"}
        size={24}
      />
      <CustomText
        display="Payment confirmed"
        font={Poppins_FONTS.FONT_Bold}
        fontSize={18}
        color="white"
      />
      <CustomText
        display={`P${plan.prize} Paid by Card (**** ${method.card.slice(-4)}).`}
        font={Poppins_FONTS.FONT_Medium}
        color="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Green,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

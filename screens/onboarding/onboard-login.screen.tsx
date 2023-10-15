import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ColorSchemeName,
  Appearance,
  Dimensions,
} from "react-native";
import { Colors, Gilroy_FONTS, HOUSC_FONTS, Poppins_FONTS } from "../../utils/constants";
import CustomText from "../../components/Helpers/CustomText";

import OnboardLoginImages from "../../components/sections/Onboard-Login";
import Logo from "../../components/Helpers/Logo";
import Faq from "../../components/Helpers/Faq";
import { ActionCard } from "../../components/Cards/ActionCard";

import LoginIcon from "../../assets/svgs/login_icon.svg";
import JoinIcon from "../../assets/svgs/join_icon.svg";
import { useAppDispatch } from "../../appStore/storeHooks";
import { SET_IS_LOGGED_IN } from "../../appStore/reducers/userReducer";

export default function OnboardLoginScreen({ navigation }: any) {
  const [background, setBackground] = useState(Appearance.getColorScheme());
  const dispatch = useAppDispatch()
  useEffect(() => {
    Appearance.addChangeListener(() => {
      getTheme();
    });
  }, []);

  function isDark() {
    return background === "dark";
  }

  function getTheme() {
    const _colorScheme = Appearance.getColorScheme();
    setBackground(_colorScheme);
  }

  function login(){
    dispatch(SET_IS_LOGGED_IN(true))
  }
  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <OnboardLoginImages />
      <View style={styles.main}>
        <View style={styles.head}>
          <Logo theme={background} />
          <Faq theme={background} onPress={() => {}} />
        </View>
        <CustomText
          display={"Welcome to"}
          font={HOUSC_FONTS.HOUSC_Regular}
          fontSize={28}
          fontWeight="bold"
        />
        <CustomText
          display={"BomAid Self Service"}
          font={HOUSC_FONTS.HOUSC_Regular}
          fontSize={28}
          fontWeight="bold"
        />

        <View style={styles.actions}>
          <View style={styles.action}>
            <ActionCard
              theme={background}
              details="Already have a Self Service Account"
              icon={<LoginIcon />}
              onPress={() => {login()}}
              title="LOG IN"
            />
          </View>
          <View style={styles.action}>
            <ActionCard
              theme={background}
              details="complete membership form"
              icon={<JoinIcon />}
              onPress={() => {login()}}
              title="JOIN"
            />
          </View>
        </View>
        <CustomText
          display={"Register for Self Service"}
          font={Poppins_FONTS.FONT_Regular}
          fontSize={10}
          fontWeight="bold"
          textAlign="center"
          italic
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
    backgroundColor: Colors.BACKGROUND_1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    flexDirection: "row",
    maxHeight: Dimensions.get("screen").height / 2.1,
    marginTop: 40,
  },
  main: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  action: {
    width: "45%",
    marginRight: 25,
  },
});

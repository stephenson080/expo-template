import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ColorSchemeName,
  Appearance,
  Alert,
} from "react-native";
import { Colors, Gilroy_FONTS } from "../../utils/constants";
import CustomText from "../../components/Helpers/CustomText";
import PageHeader from "../../components/Helpers/PageHeader";
import Title from "../../components/Helpers/Title";
import PlanCard from "../../components/Cards/PlanCard";
import { useAppSelector } from "../../appStore/storeHooks";
import { getDateText } from "../../utils/helpers";
import SubcriptionActions from "../../components/Helpers/SubcriptionActions";
import PaymentMethods from "../../components/sections/PaymentMethods";

export default function SubcriptionsIndexScreen({ navigation }: any) {
  const [background, setBackground] = useState(Appearance.getColorScheme());
  const [currentMethodId, setCurrentMethodId] = useState("");

  const { plan, paymentMethods } = useAppSelector((state) => state.user);
  useEffect(() => {
    Appearance.addChangeListener(() => {
      getTheme();
    });
  }, []);

  function isDark() {
    return background === "dark";
  }

  function nav(screen: string) {
    switch (screen) {
      case "change-plan":
        navigation.navigate("health-plans");
        return;
      case "pay":
        if (plan.status === "active") return;
        if (paymentMethods.length <= 0) {
          Alert.alert("Warning!", "Add a Payment method!", [
            { text: "Okay", style: "cancel" },
          ]);
          return;
        }
        const method = paymentMethods.find((m) => m.id === currentMethodId);
        if (!method) {
          Alert.alert("Warning!", "No Payment Method Selected", [
            { text: "Okay", style: "cancel" },
          ]);
          return;
        }
        navigation.navigate("confirmation", { plan, method });
        return;
      default:
        navigation.navigate("statement");
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
      <View style={styles.padd}>
        <PageHeader
          theme={background}
          navigation={navigation}
          page="Subcriptions"
          subPage="SELF-SERVICE"
        />
      </View>
      <Title theme={background} title="SELF SERVICE" />
      <View style={styles.center}>
        <View style={styles.plan}>
          <PlanCard active theme={background} showType plan={plan} />
        </View>
      </View>

      <View style={styles.center}>
        <View style={styles.status_con}>
          <View style={styles.status}>
            <CustomText
              display="SUBSRIPTION DUE: "
              font={Gilroy_FONTS.FONT_Bold}
              fontSize={10}
              color={Colors.GREY_3}
              fontWeight="bold"
            />
            <CustomText
              display="5 DAYS AGO"
              font={Gilroy_FONTS.FONT_Bold}
              fontSize={10}
              color={Colors.FAILURE}
              fontWeight="bold"
            />
          </View>
          <CustomText
            display={getDateText(plan.dueAt)}
            font={Gilroy_FONTS.FONT_Medium}
            textAlign="center"
          />
        </View>
      </View>
      <Title
        theme={background}
        title="SUBscription"
        error={plan.status !== "active"}
        count={1}
      />
      <View style={styles.padd}>
        <SubcriptionActions onPress={nav} plan={plan} theme={background} />
      </View>
      <Title theme={background} title="Payment Method" />
      <View style={styles.padd}>
        <PaymentMethods
          methods={paymentMethods}
          theme={background}
          nav={() => {
            navigation.navigate("add-method");
          }}
          onMethodIdChanged={(id) => {
            setCurrentMethodId(id);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_1,
    paddingVertical: 15,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  padd: {
    paddingHorizontal: 15,
  },
  plan: {
    width: 130,
    marginVertical: 10,
  },
  status_con: {},
  status: {
    flexDirection: "row",
    alignItems: "center",
  },
});

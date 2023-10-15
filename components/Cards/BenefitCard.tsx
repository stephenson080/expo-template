import { View, StyleSheet, ColorSchemeName } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import CustomText from "../Helpers/CustomText";
import { Poppins_FONTS } from "../../utils/constants";
type Props = {
  theme: ColorSchemeName;
  benefit: Benefit;
  color: string;
};

export default function BenefitCard(props: Props) {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.check, backgroundColor: props.color }}>
        <Icon name="checkmark" size={16} color={"white"} />
      </View>
      <CustomText display={props.benefit.name} font={Poppins_FONTS.FONT_Bold} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  check: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 15
  },
});

import { View, StyleSheet, ColorSchemeName, Dimensions } from "react-native";
import User from "../../models/user";

import Vector from "../../assets/svgs/Vector.svg";
import { Colors, Gilroy_FONTS } from "../../utils/constants";
import CustomText from "../Helpers/CustomText";

type Props = {
  user: User;
  theme: ColorSchemeName;
};
export default function (props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CustomText
          display="Enrolled Scheme: "
          font={Gilroy_FONTS.FONT_Medium}
          fontSize={12}
        />
        <CustomText
          display={props.user.plan}
          font={Gilroy_FONTS.FONT_Bold}
          fontSize={12}
          color={Colors.PRIMARY}
        />
      </View>
      <View style={styles.row}>
        <CustomText
          display="Membership Status: "
          font={Gilroy_FONTS.FONT_Medium}
          fontSize={12}
        />
        <CustomText
          display={props.user.status}
          font={Gilroy_FONTS.FONT_Bold}
          fontSize={12}
          color={props.user.status === "active" ? Colors.Green : Colors.FAILURE}
        />
      </View>

      <View style={styles.row}>
        <CustomText
          display="Membership Number: "
          font={Gilroy_FONTS.FONT_Medium}
          fontSize={12}
        />
        <CustomText
          display={props.user.no}
          font={Gilroy_FONTS.FONT_Bold}
          fontSize={12}
          color={Colors.PRIMARY}
        />
      </View>
      <CustomText
        display={'As at 2 oct, 09:41'}
        font={Gilroy_FONTS.FONT_Semi_Bold}
        fontSize={12}
      />
      <View style={styles.vector}>
        <Vector />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    padding: 10,
    backgroundColor: Colors.NOCOLOR,
    width: "100%",
    marginVertical: 10,
    overflow: 'hidden'
  },
  vector: {
    position: "absolute",
    top: 20,
    left: Dimensions.get("screen").width - 120,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2
  },
});

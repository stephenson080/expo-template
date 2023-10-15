import { View, StyleSheet, ColorSchemeName } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import CustomText from "../Helpers/CustomText";
import { Colors, Gilroy_FONTS, Poppins_FONTS } from "../../utils/constants";
import { addCommasToNumber, getDateText } from "../../utils/helpers";
type Props = {
  theme: ColorSchemeName;
  statement: Statement;
};

export default function StatementCard(props: Props) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.top}>
          <CustomText
            display={props.statement.type.toUpperCase()}
            font={Gilroy_FONTS.FONT_Bold}
            fontSize={10}
            color={
              props.statement.status === "active"
                ? Colors.PRIMARY
                : Colors.FAILURE
            }
          />
          <CustomText
            display={
              props.statement.status === "active"
                ? " Card: PROCESSED SUCCESSFULLY"
                : " DECLINED"
            }
            font={Poppins_FONTS.FONT_Bold}
            fontSize={10}
            color={Colors.GREY_3}
          />
        </View>
        <CustomText
          display={getDateText(props.statement.date)}
          font={Gilroy_FONTS.FONT_Medium}
          fontWeight="bold"
        />
      </View>

      <CustomText
        display={`P${addCommasToNumber(props.statement.prize.toString())}`}
        font={Gilroy_FONTS.FONT_Medium}
        fontWeight="bold"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    justifyContent: 'space-between',
    width: '100%'
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  check: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 15,
  },
});

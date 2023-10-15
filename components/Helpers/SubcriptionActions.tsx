import { ColorSchemeName, StyleSheet, View } from "react-native";
import CustomText from "./CustomText";
import { Colors, Gilroy_FONTS, Poppins_FONTS } from "../../utils/constants";
import { getDateText, addCommasToNumber } from "../../utils/helpers";

type Props = {
  theme: ColorSchemeName;
  plan: Plan;
  onPress: (screen: string) => void;
};

export default function SubcriptionActions(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <CustomText
            display="SUBSCRIPTION STATUS"
            font={Gilroy_FONTS.FONT_Semi_Bold}
            fontSize={10}
            fontWeight="bold"
            color={Colors.GREY_3}
          />
          <CustomText
            display={`${props.plan.status[0].toUpperCase()}${props.plan.status.slice(
              1
            )}`}
            font={Gilroy_FONTS.FONT_Medium}
            // fontWeight="bold"
            color={
              props.plan.status === "active" ? Colors.Green : Colors.FAILURE
            }
            
          />
        </View>
        <CustomText
          display="PAY NOW"
          font={Poppins_FONTS.FONT_Bold}
          fontSize={10}
          color={props.plan.status === 'active' ? undefined : Colors.FAILURE}
          onPress={() => props.onPress('pay')}
        />
      </View>
      <View style={styles.row}>
        <View>
          <CustomText
            display="BILLING AMOUNT"
            font={Gilroy_FONTS.FONT_Semi_Bold}
            fontSize={10}
            fontWeight="bold"
            color={Colors.GREY_3}
          />
          <View style={styles.billing}>
            <CustomText
              display={"P "}
              font={Gilroy_FONTS.FONT_Bold}
              color={Colors.PRIMARY}
              fontSize={10}
            />
            <CustomText
              display={addCommasToNumber(props.plan.prize.toString())}
              font={Gilroy_FONTS.FONT_Medium}
              fontWeight="bold"
            />
            <CustomText
              display={"/MONTHLY"}
              font={Gilroy_FONTS.FONT_Bold}
              color={Colors.PRIMARY}
              fontSize={10}
            />
          </View>
        </View>
        <CustomText
          display="CHANGE PLAN"
          font={Poppins_FONTS.FONT_Bold}
          fontSize={10}
          onPress={() => props.onPress('change-plan')}
        />
      </View>
      <View style={styles.row}>
        <View>
          <CustomText
            display="NEXT BILLING DATE"
            font={Gilroy_FONTS.FONT_Semi_Bold}
            fontSize={10}
            fontWeight="bold"
            color={Colors.GREY_3}
          />
          <CustomText
            display={getDateText(props.plan.dueAt)}
            font={Gilroy_FONTS.FONT_Medium}
            fontWeight="bold"
          />
        </View>
        <CustomText
          display="STATEMENT"
          font={Poppins_FONTS.FONT_Bold}
          fontSize={10}
          onPress={() => props.onPress('statement')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 8,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  billing: {
    flexDirection: 'row',
    alignItems:'center'
  }
});

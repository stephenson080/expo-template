import {
  ColorSchemeName,
  Pressable,
  StyleSheet,
  View,
  GestureResponderEvent,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import CustomText from "../Helpers/CustomText";
import { Colors, Gilroy_FONTS } from "../../utils/constants";
import { addCommasToNumber } from "../../utils/helpers";

type Props = {
  theme: ColorSchemeName;
  plan: Plan;
  showType?: boolean;
  showPrize?: boolean;
  active: boolean;
  typeColor?: string;
  onPress?: (event: GestureResponderEvent, plan: Plan) => void;
  scroll?: boolean;
};

export default function PlanCard(props: Props) {
  return (
    <Pressable
      onPress={(e) => {
        if (props.onPress) {
          props.onPress(e, props.plan);
        }
      }}
      style={{
        ...styles.container,
        borderColor: props.active ? props.plan.color : Colors.BORDER_GREY,
      }}
    >
      {props.showType && (
        <View style={{ ...styles.type, backgroundColor: props.plan.color }}>
          <CustomText
            display={props.plan.type}
            font={Gilroy_FONTS.FONT_Medium}
            fontSize={10}
            color={props.typeColor || "white"}
          />
          <Icon
            style={{ marginLeft: 8 }}
            name="star"
            color={props.typeColor || "white"}
            size={10}
          />
        </View>
      )}
      <View style={styles.content}>
        <View style={styles.center}>
          <CustomText
            display={props.plan.title}
            font={Gilroy_FONTS.FONT_Semi_Bold}
            textAlign="center"
          />
        </View>
        <CustomText
          display={props.plan.desc}
          font={Gilroy_FONTS.FONT_Regular}
          fontSize={10}
          textAlign="center"
        />
        {props.showPrize ? (
          <View>
            <CustomText
              display={`P ${addCommasToNumber(props.plan.prize.toString())}`}
              font={Gilroy_FONTS.FONT_Semi_Bold}
              textAlign="center"
            />
            <CustomText
              display={"Monthly"}
              font={Gilroy_FONTS.FONT_Regular}
              fontSize={10}
              textAlign="center"
            />
          </View>
        ) : !props.scroll ? (
          <CustomText
            display={"M+2CD"}
            font={Gilroy_FONTS.FONT_Semi_Bold}
            fontSize={16}
            textAlign="center"
          />
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  type: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 3,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingHorizontal: 15,
    width: "100%",
    marginTop: 15,
    paddingVertical: 8
  },
});

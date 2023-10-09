import { View, StyleSheet, ColorSchemeName } from "react-native";
import CustomText from "./CustomText";
import { Colors, Gilroy_FONTS, HOUSC_FONTS } from "../../utils/constants";
type Props = {
  theme: ColorSchemeName;
  title: string;
  count?: number;
  error?: boolean;
};
export default function Title(props: Props) {
  function getBackground_textColor() {
    if (props.error) {
      return {
        text: Colors.BACKGROUND_1,
        background: Colors.FAILURE,
      };
    }
    if (!props.count) {
      return {
        text: Colors.TEXT_DARK,
        background: Colors.BACKGROUND_1,
      };
    }

    return {
      text: Colors.TEXT_DARK,
      background: Colors.Purple,
    };
  }
  return (
    <View style={styles.container}>
      <CustomText
        display={props.title.toUpperCase()}
        font={Gilroy_FONTS.FONT_Bold}
      />
      {
        props.count !== undefined && <View
          style={{
            ...styles.count,
            backgroundColor: getBackground_textColor().background,
          }}
        >
          <CustomText
            display={props.count.toString()}
            font={Gilroy_FONTS.FONT_Bold}
            fontSize={12}
            color={getBackground_textColor().text}
          />
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.TEXT_DARK,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  count: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

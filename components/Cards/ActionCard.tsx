import { ColorSchemeName, StyleSheet, View, Pressable } from "react-native";
import { Colors, Gilroy_FONTS, HOUSC_FONTS } from "../../utils/constants";
import CustomText from "../Helpers/CustomText";

type Props = {
  theme: ColorSchemeName;
  title: string;
  details: string;
  icon: JSX.Element;
  onPress: () => void;
};
export function ActionCard(prop: Props) {
  return (
    <Pressable onPress={prop.onPress} style={styles.card}>
      <View style={styles.center}>{prop.icon}</View>

      <View style={styles.content}>
        <CustomText
          display={prop.details}
          font={Gilroy_FONTS.FONT_Regular}
          fontSize={10}
          lineHeight={15}
          textAlign="center"
          color={Colors.GREY_Text}
        />
        <View>
          <CustomText
            display={prop.title}
            font={HOUSC_FONTS.HOUSC_Regular}
            fontWeight="700"
            fontSize={18}
            textAlign="center"
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    width: "100%",
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    marginTop: 10,
  },
});

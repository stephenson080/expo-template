import { ColorSchemeName, Pressable, StyleSheet, View } from "react-native";

import FaqIcon from "../../assets/svgs/faq-icon.svg";
import CustomText from "./CustomText";
import { Gilroy_FONTS } from "../../utils/constants";

type Props = {
  theme: ColorSchemeName;
  onPress: () => void;
};
export default function Faq(props: Props) {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <View style={styles.icon}>
        <FaqIcon />
      </View>
      <CustomText
        display="FAQs"
        font={Gilroy_FONTS.FONT_Semi_Bold}
        fontSize={10}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 2,
  },
});

import { ColorSchemeName, Pressable, StyleSheet, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import CustomText from "./CustomText";
import { Colors, HOUSC_FONTS } from "../../utils/constants";

type Props = {
  theme: ColorSchemeName;
  navigation: any;
  page: string;
  subPage: string;
};
export default function PageHeader(props: Props) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.back} onPress={() => props.navigation.goBack()}>
        <Icon name="chevron-back" size={20} />
      </Pressable>
      <View>
        <CustomText
          display={props.subPage}
          font={HOUSC_FONTS.HOUSC_Regular}
          fontSize={12}
          fontWeight="bold"
          color={Colors.GREY_3}
          textAlign="right"
        />
        <CustomText
          display={props.page}
          font={HOUSC_FONTS.HOUSC_Regular}
          fontSize={18}
          fontWeight="bold"
          textAlign="right"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: Colors.GREY_2,
  },
});

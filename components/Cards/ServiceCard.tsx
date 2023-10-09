import { StyleSheet, View, ColorSchemeName } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { Colors, Gilroy_FONTS } from "../../utils/constants";
import CustomText from "../Helpers/CustomText";

type Props = {
  service: ServiceUi;
  theme: ColorSchemeName;
  onPress: (title: string) => void;
  count: number;
};

export default function ServiceCard(props: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.center}>{props.service.icon}</View>
      <View style={styles.content}>
        <View>
          <CustomText
            display={props.service.des.toUpperCase()}
            font={Gilroy_FONTS.FONT_Semi_Bold}
            fontSize={8}
            color={Colors.GREY_3}
          />
          <CustomText
            display={props.service.title}
            font={Gilroy_FONTS.FONT_Medium}
            fontSize={16}
            fontWeight="bold"
          />
        </View>
        {props.count <= 0 ? (
          <Icon name="chevron-forward" size={25} color={Colors.PRIMARY} />
        ) : (
          <View
            style={styles.count}
          >
            <CustomText
              display={props.count.toString()}
              font={Gilroy_FONTS.FONT_Bold}
              fontSize={12}
              color="white"
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    width: "100%",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  content: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  count: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: Colors.Purple,
  },
});

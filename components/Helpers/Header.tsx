import { ColorSchemeName, View, StyleSheet, Image } from "react-native";
import CustomText from "./CustomText";
import { Colors, HOUSC_FONTS } from "../../utils/constants";
import { getDateNow } from "../../utils/helpers";
type Props = {
  theme: ColorSchemeName;
  image: string;
  name: string;
};
export default function Header(props: Props) {
  return (
    <View style={styles.container}>
      <View>
        <CustomText
          display={getDateNow().toUpperCase()}
          font={HOUSC_FONTS.HOUSC_Regular}
          fontSize={12}
          fontWeight="900"
          color={Colors.GREY_3}
        />
        <CustomText
          display={props.name}
          font={HOUSC_FONTS.HOUSC_Regular}
          fontSize={16}
          fontWeight="bold"
        />
      </View>
      <View style={styles.image_con}>
        <Image style={styles.image} source={require('../../assets/images/user.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    image_con: {
        height: 40,
        width: 40
    },
    image: {
        height: '100%',
        width: '100%'
    }
})

import { View, StyleSheet, ColorSchemeName } from "react-native";

import LogoLight from "../../assets/svgs/bomaid-logo.svg";
// import LogoDark from "../../assets/svgs/bomaid-logo.svg";

type Props = {
  theme: ColorSchemeName
};
export default function Logo(props: Props) {
  return (
    <View style={styles.image_con}>
      {props.theme === "light" ? <LogoLight /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  image_con: {
    width: "100%",
    // height: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

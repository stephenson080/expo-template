import { TouchableOpacity, StyleSheet, ColorSchemeName, DimensionValue } from "react-native";

import CustomText from "../Helpers/CustomText";

import { Colors, Gilroy_FONTS, Poppins_FONTS } from "../../utils/constants";

type Props = {
  title: string;
  tintColor: string;
  foreColor: string;
  onPress?: () => void;
  disabled?: boolean;
  paddingHorizontal?: number;
  paddingVertical?: number;
  border?: string;
  width?: DimensionValue
  theme: ColorSchemeName
  loading?: boolean
  left?: JSX.Element
  right?: JSX.Element
  
};
export default function Button({
  title,
  tintColor,
  foreColor,
  onPress,
  disabled,
  paddingHorizontal,
  paddingVertical,
  border,
  width,
  theme,
  loading,
  left,
  right
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        ...styles.btn,
        backgroundColor: (loading || disabled) ? theme === 'dark' ? Colors.D_M_E_2 :  "#F8F9FB" : foreColor,
        paddingHorizontal,
        paddingVertical,
        borderColor: border,
        borderWidth: border ? 1 : undefined,
        width
      }}
    >
      {left}
      <CustomText
        display={loading ? "Loading..." : title}
        color={((loading || disabled) && theme === 'light') ? 'gray' : tintColor}
        font={Gilroy_FONTS.FONT_Semi_Bold}
        fontSize={16}
      />
      {right}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 12,
    paddingVertical: 15,
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

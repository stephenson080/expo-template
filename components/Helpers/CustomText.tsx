import { Text } from "react-native";
import { Gilroy_FONTS, HOUSC_FONTS, Poppins_FONTS } from "../../utils/constants";

type Props = {
  display: string;
  font: Gilroy_FONTS | HOUSC_FONTS | Poppins_FONTS;
  color?: string;
  italic?: boolean;
  fontSize?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  textDecoration?: "underline" | "line-through" | "underline line-through";
  onPress?: () => void;
  opacity?: number;
  lineHeight?: number;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
};
export default function CustomText({
  display,
  font,
  color,
  italic,
  textAlign,
  textDecoration,
  onPress,
  fontSize,
  opacity,
  lineHeight,
  fontWeight
}: Props) {
  return (
    <Text
      style={{
        fontFamily: font,
        color: color ? color : "black",
        fontStyle: italic ? "italic" : "normal",
        textDecorationLine: textDecoration ? textDecoration : "none",
        marginVertical: 2,
        textAlign: textAlign ? textAlign : "left",
        fontSize: fontSize,
        display: "flex",
        flexWrap: "wrap",
        opacity: opacity,
        lineHeight: lineHeight,
        fontWeight,
      }}
      onPress={onPress}
    >
      {display}
    </Text>
  );
}

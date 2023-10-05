import { Text } from "react-native";
import { Gilroy_FONTS } from "../../utils/constants";

type Props = {
  display: string;
  font: Gilroy_FONTS;
  color?: string;
  italic?: boolean;
  fontSize?: number
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify',
  textDecoration?: 'underline' | 'line-through' | 'underline line-through'
  onPress?: ()=>void
  opacity?: number
};
export default function CustomText({ display, font, color, italic, textAlign, textDecoration, onPress, fontSize, opacity }: Props) {
  return (
    <Text
      style={{
        fontFamily: font,
        color: color ? color : "black",
        fontStyle: italic ? "italic" : "normal",
        textDecorationLine: textDecoration ? textDecoration : 'none',
        marginVertical: 2,
        textAlign: textAlign ? textAlign : 'left',
        fontSize: fontSize,
        display: 'flex',
        flexWrap: 'wrap',
        opacity: opacity
      }}
      onPress={onPress}
    >
      {display}
    </Text>
  );
}

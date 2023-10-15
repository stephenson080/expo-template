import { useState, ReactNode } from "react";
import {
  View,
  StyleSheet,
  ColorSchemeName,
  KeyboardTypeOptions,
} from "react-native";

import { Colors, Gilroy_FONTS, Poppins_FONTS } from "../../utils/constants";
import { TextField } from "react-native-ui-lib";
import CustomText from "../Helpers/CustomText";

type Props = {
  onChangeText: (value: string) => void;
  validate?: any[];
  validationMessage?: string[];
  placeholder: string;
  error?: boolean;
  value?: string;
  right?: ReactNode;
  left?: ReactNode;
  errorMessage?: string;
  theme: ColorSchemeName;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  label?: string;
  maxLength?: number
};

export default function Input(props: Props) {
  const [_value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  function onChangeText(value: string) {
    setValue(value)
    props.onChangeText(value)
  }
  return (
    <View>
      <TextField
        placeholder={props.placeholder}
        onChangeText={onChangeText}
        enableErrors
        validate={["required"]}
        validationMessage={["Field is required"]}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        fieldStyle={{
          ...styles.container,
          borderColor: props.error
            ? Colors.FAILURE
            : isFocused
            ? Colors.PRIMARY
            : Colors.BORDER_GREY,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        label={props.label}
        labelStyle={{ ...styles.labelStyle }}
        value={_value}
        secureTextEntry={props.secureTextEntry}
      />
      {props.error && (
        <View style={styles.error}>
          <CustomText
            display={props.errorMessage ? props.errorMessage : ""}
            font={Gilroy_FONTS.FONT_Regular}
            fontSize={12}
            color={Colors.FAILURE}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginTop: 3,
    fontFamily: Gilroy_FONTS.FONT_Medium,
    fontSize: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  labelStyle: { fontFamily: Gilroy_FONTS.FONT_Semi_Bold, fontSize: 14 },
  contentStyle: {
    fontFamily: Poppins_FONTS.FONT_Regular,
    fontSize: 13,
    backgroundColor: "transparent",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  error: {
    marginTop: -25,
  },
});

import {
    ColorSchemeName,
    Pressable,
    StyleSheet,
    TextInput,
    View,
  } from "react-native";
  import Icon from "@expo/vector-icons/Ionicons";
  import { Colors, Gilroy_FONTS } from "../../utils/constants";
  import { useState } from "react";
  
  type Props = {
    theme: ColorSchemeName;
    onValueChanged: (v: string) => void;
    closeButton?: boolean;
    onCloseSearch?: () => void;
    onSearch: () => void
    value?: string
  };
  
  export default function SearchInput(props: Props) {
    const [_value, setValue] = useState(props.value ? props.value : '');
    function isDarkMode() {
      return props.theme === "dark";
    }
    function getClosebtnBackgroundColor() {
      if (isDarkMode()) {
        return "#8E8E93";
      }
      return '#8E8E93';
    }
    return (
      <Pressable
        style={{
          ...styles.container,
          backgroundColor: isDarkMode() ? Colors.D_M_E_2 : Colors.GREY_BACKGROUND,
        }}
        onPress={() => props.onSearch()}
      >
        <Icon name="search" size={18} color={Colors.DARK_MODE_GREY} />
        <TextInput
            cursorColor={'black'}
          value={_value}
          style={{
            ...styles.inp,
            width: props.closeButton ? "87%" : "100%",
            color: isDarkMode() ? Colors.GREY : undefined,
          }}
          onChangeText={(v) => {
            setValue(v);
            props.onValueChanged(v);
          }}
          placeholder="Search..."
          onFocus={() => props.onSearch()}
          onBlur={() => {
            if (props.onCloseSearch) props.onCloseSearch()
          }}
        />
        {props.closeButton && (
          <Pressable
            style={{
              ...styles.close,
              backgroundColor: getClosebtnBackgroundColor(),
            }}
            onPress={() => {
              if (props.onCloseSearch) {
                props.onCloseSearch();
              }
            }}
          >
            <Icon name="close" size={12} color="#DADADA" />
          </Pressable>
        )}
      </Pressable>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 5,
      height: 40,
      overflow: "scroll",
    },
    inp: {
      paddingHorizontal: 5,
      paddingVertical: 5,
      marginLeft: 5,
      fontFamily: Gilroy_FONTS.FONT_Regular,
      fontSize: 14,
      backgroundColor: Colors.NOCOLOR,
      height: "100%",
    },
    close: {
      width: 15,
      height: 15,
      borderRadius: 7.5,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  
import { useEffect, useState } from "react";
import { View, StyleSheet, ColorSchemeName, Appearance } from "react-native";
import { Colors, Gilroy_FONTS } from "../../utils/constants";
import CustomText from "../../components/Helpers/CustomText";

export default function HomeIndexScreen({ navigation }: any) {
  const [background, setBackground] = useState(Appearance.getColorScheme());
  useEffect(() => {
    Appearance.addChangeListener(() => {
      getTheme();
    });
  }, []);

  function isDark() {
    return background === "dark";
  }

  function getTheme() {
    const _colorScheme = Appearance.getColorScheme();
    setBackground(_colorScheme);
  }
  return (
    <View
      style={{
        ...styles.container,
      }}
    >
        <CustomText display="Welcome Home" font={Gilroy_FONTS.FONT_Bold} fontSize={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND_1
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

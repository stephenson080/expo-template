import { useEffect, useState } from "react";
import { View, StyleSheet, ColorSchemeName, Appearance } from "react-native";
import { Colors, Gilroy_FONTS } from "../../utils/constants";
import CustomText from "../../components/Helpers/CustomText";
import Header from "../../components/Helpers/Header";
import SearchInput from "../../components/Forms/SearchInput";
import Title from "../../components/Helpers/Title";
import MembershipCard from "../../components/Cards/MembershipCard";
import { useAppSelector } from "../../appStore/storeHooks";
import Services from "../../components/sections/Services";

export default function HomeScreen({ navigation }: any) {
  const [background, setBackground] = useState(Appearance.getColorScheme());
  const [search, setSearch] = useState(false);
  const [searchString, setSearchString] = useState("");

  const { user } = useAppSelector((state) => state.user);
  useEffect(() => {
    Appearance.addChangeListener(() => {
      getTheme();
    });
  }, []);

  function isDark() {
    return background === "dark";
  }

  function navigateTo( title: string) {
    if (title === 'Subcription'){
      navigation.navigate('subscription')
      return
    }
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
      <View style={{ paddingHorizontal: 15, paddingTop: 15 }}>
        <Header image="" name="Dumelang, Moraki" theme={background} />

        <View style={styles.search}>
          <SearchInput
            onSearch={() => setSearch(true)}
            onValueChanged={(v) => {
              setSearchString(v);
            }}
            theme={background}
            closeButton={search}
            onCloseSearch={() => {
              setSearch(false);
            }}
            value={searchString}
          />
        </View>
      </View>

      <Title theme={background} title="Membership Card" count={1} />
      <View style={{ paddingHorizontal: 15 }}>
        <MembershipCard theme={background} user={user} />
      </View>

      <Title theme={background} title="SELF SERVICE" count={0} />
      <Services theme={background} onPress={navigateTo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    width: "100%",
    marginVertical: 10,
  },
});

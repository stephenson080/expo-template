import { useEffect, useState } from "react";
import { View, StyleSheet, ColorSchemeName, Appearance, ScrollView } from "react-native";
import { Colors, Gilroy_FONTS } from "../../utils/constants";
import CustomText from "../../components/Helpers/CustomText";
import PageHeader from "../../components/Helpers/PageHeader";
import Title from "../../components/Helpers/Title";
import { useAppSelector } from "../../appStore/storeHooks";
import StatementCard from "../../components/Cards/StatementCard";

export default function TransactionScreen({ navigation }: any) {
  const [background, setBackground] = useState(Appearance.getColorScheme());

  const { plan } = useAppSelector((state) => state.user);

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
        <View style={styles.padd}>
        <PageHeader
          theme={background}
          navigation={navigation}
          page="Statement"
          subPage="SUBSCRIPTIONS"
        />
      </View>
      <Title theme={background} title="Transactions" />
      <ScrollView contentContainerStyle={styles.padd}>
        {plan.statements.map(s => <StatementCard theme={background} statement={s} key={s.id}  />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: Colors.BACKGROUND_1
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  padd: {
    paddingHorizontal: 15,
  },
});

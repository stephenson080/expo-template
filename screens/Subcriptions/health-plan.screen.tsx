import { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  ColorSchemeName,
  Appearance,
  Animated,
  FlatList,
  ScrollView,
} from "react-native";
import { Colors, Gilroy_FONTS, plans } from "../../utils/constants";
import CustomText from "../../components/Helpers/CustomText";
import PageHeader from "../../components/Helpers/PageHeader";
import Title from "../../components/Helpers/Title";
import PlanCard from "../../components/Cards/PlanCard";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { useAppDispatch, useAppSelector } from "../../appStore/storeHooks";
import BenefitCard from "../../components/Cards/BenefitCard";
import Button from "../../components/Forms/Button";
import { SET_PLAN } from "../../appStore/reducers/userReducer";

export default function HealthPlanScreen({ navigation }: any) {
  const [background, setBackground] = useState(Appearance.getColorScheme());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intialIndex, setIntialIndex] = useState(0);
  const ref = useRef<FlatList>(null);

  const { plan } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch()
  useEffect(() => {
    Appearance.addChangeListener(() => {
      getTheme();
    });
  }, []);

  useEffect(() => {
    const index = plans.findIndex((p) => p.id === plan.id);
    setIntialIndex(index);
    setCurrentIndex(index);
  }, []);

  function _scroll(index: number) {
    if (ref.current) {
      ref.current.scrollToIndex({ index, animated: true });
    }
    setCurrentIndex(index);
  }

  function isDark() {
    return background === "dark";
  }

  const scrollX = useRef(new Animated.Value(0)).current;

  function getTheme() {
    const _colorScheme = Appearance.getColorScheme();
    setBackground(_colorScheme);
  }

  function onChangePlan(){
    const _plan = plans[currentIndex]
    if (_plan){
      dispatch(SET_PLAN(_plan))
    }
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
          page="Change Health Plan"
          subPage="SUBSCRIPTIONS"
        />
      </View>
      <Title theme={background} title="HEALTH PLANS" />
      <View style={{ ...styles.padd, height: 250 }}>
        <FlatList
          ref={ref}
          data={plans}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          pagingEnabled
          horizontal
          decelerationRate={"normal"}
          scrollEventThrottle={16}
          renderItem={(props) => (
            <View
              style={{
                width: props.index === currentIndex ? 110 : 130,
                marginHorizontal: 8,
              }}
            >
              <PlanCard
                plan={props.item}
                active={props.index === currentIndex}
                theme={background}
                typeColor={"white"}
                onPress={(e) => _scroll(props.index)}
                showPrize={props.index === currentIndex}
                showType={props.index === currentIndex}
                scroll
              />
            </View>
          )}
          contentContainerStyle={{ alignItems: "center" }}
          initialScrollIndex={intialIndex}
        />
        <ExpandingDot
          data={plans}
          expandingDotWidth={10}
          scrollX={scrollX}
          inActiveDotOpacity={0.2}
          dotStyle={{
            width: 5,
            height: 5,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 2.5,
            marginHorizontal: 3,
          }}
          containerStyle={{
            marginTop: 30,
          }}
        />
      </View>
      <Title theme={background} title="BENEFIT FEATURES" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.padd}
      >
        {plans[currentIndex].benefits.map((b) => (
          <BenefitCard
            theme={background}
            benefit={b}
            color={plans[currentIndex].color}
            key={b.id}
          />
        ))}
      </ScrollView>
      <View style={styles.padd}>
        <View>
          <Button
            foreColor={"black"}
            theme={background}
            tintColor="white"
            title="Change Plan"
            paddingVertical={10}
            onPress={onChangePlan}
          />
        </View>
        <CustomText
          display="Learn More"
          font={Gilroy_FONTS.FONT_Bold}
          color={plans[currentIndex].color}
          textAlign="center"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: Colors.BACKGROUND_1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  padd: {
    paddingHorizontal: 15,
  },
});

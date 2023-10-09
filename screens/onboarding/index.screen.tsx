import { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ColorSchemeName,
  Appearance,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { Colors, Gilroy_FONTS, HOUSC_FONTS, onboard } from "../../utils/constants";
import CustomText from "../../components/Helpers/CustomText";
import Carousel from "react-native-reanimated-carousel";
import Logo from "../../components/Helpers/Logo";
import Faq from "../../components/Helpers/Faq";

// import

const dimention = Dimensions.get("screen");
const width = dimention.width;
const height = dimention.height;

export default function OnboardingIndexScreen({ navigation }: any) {
  const [background, setBackground] = useState(Appearance.getColorScheme());
  const [index, setIndex] = useState(0);

  // const [x, setX] = useState(new Animated.Value(0));

  const scrollX = useRef(new Animated.Value(0)).current;

  // console.log(scrollX, x);

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

  function renderImage(image: JSX.Element) {
    return <View style={styles.image_con}>{image}</View>;
  }
  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <Carousel
        loop
        width={width}
        height={height / 2.1}
        autoPlay={true}
        data={onboard}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => {
          setIndex(index);
        }}
        renderItem={({ item, index }) => (
          <View style={styles.image_con}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
        autoPlayInterval={5000}
        // onScrollBegin={() =>
        //   Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        //     useNativeDriver: false,
        //   })
        // }
      />
      <View style={styles.center}>
        <ExpandingDot
          data={onboard}
          expandingDotWidth={30}
          scrollX={scrollX}
          inActiveDotOpacity={0.6}
          dotStyle={styles.dotStyle}
          containerStyle={styles.dot_con}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.head}>
          <Logo theme={background} />
          <Faq theme={background} onPress={() => {}} />
        </View>
        <CustomText
          display={onboard[index].title1}
          font={HOUSC_FONTS.HOUSC_Regular}
          fontSize={28}
          fontWeight='bold'
        />
        <CustomText
          display={onboard[index].title2}
          font={HOUSC_FONTS.HOUSC_Regular}
          fontSize={28}
          fontWeight='bold'
        />
        <View style={styles.details}>
          <CustomText
            display={onboard[index].details}
            font={Gilroy_FONTS.FONT_Regular}
            fontSize={16}
            lineHeight={26}
          />
        </View>
        <View style={styles.action}>
          <CustomText
            display="Skip"
            font={Gilroy_FONTS.FONT_Semi_Bold}
            fontSize={16}
          />
          <TouchableOpacity onPress={() => navigation.navigate('onboard-login')} style={styles.skip}>
            <Icon name="chevron-forward" color={Colors.PRIMARY} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
    backgroundColor: Colors.BACKGROUND_1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  image_con: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  main: {
    paddingHorizontal: 20,
    marginTop: 50
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    marginBottom: 30,
  },
  details: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 20,
  },
  skip: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E5F7FD",
    justifyContent: "center",
    alignItems: "center",
  },
  action: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  dotStyle: {
    width: 8,
    height: 8,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 4,
  },
  dot_con: {
    top: 10,
  }
});

import { StyleSheet, View } from "react-native";

import Onboard_1 from "../../assets/svgs/onboard_1.svg";
import Onboard_2 from "../../assets/svgs/onboard_2.svg";
import Onboard_3 from "../../assets/svgs/onboard_3.svg";
import Onboard_4 from "../../assets/svgs/onboard_4.svg";
import Onboard_5 from "../../assets/svgs/onboard_5.svg";
import Onboard_6 from "../../assets/svgs/onboard_6.svg";
import Onboard_7 from "../../assets/svgs/onboard_7.svg";
import Onboard_8 from "../../assets/svgs/onboard_8.svg";
import Onboard_9 from "../../assets/svgs/onboard_9.svg";
import Onboard_10 from "../../assets/svgs/onboard_10.svg";
import Onboard_11 from "../../assets/svgs/onboard_11.svg";

export default function OnboardLoginImages() {
  return (
    <View style={styles.container}>
      <View style={styles.column_one}>
        <View style={styles.column_one_gap}>
          <Onboard_1 />
        </View>
        <View style={styles.column_one_gap}>
          <Onboard_2 />
        </View>
      </View>
      <View style={styles.column_two}>
        <View style={styles.column_one_gap}>
          <Onboard_3 />
        </View>
        <View style={styles.column_one_gap}>
          <Onboard_4 />
        </View>
        <View style={styles.column_one_gap}>
          <Onboard_5 />
        </View>
      </View>
      <View style={styles.column_two}>
        <View style={styles.column_two_gap}>
          <Onboard_6 />
        </View>
        <View style={{...styles.column_two_gap, paddingLeft: 30}}>
          <Onboard_7 />
        </View>
        <View style={styles.column_two_gap}>
          <Onboard_8 />
        </View>
      </View>
      <View style={styles.column_two}>
        <View style={styles.column_one_gap}>
          <Onboard_9 />
        </View>
        <View style={styles.column_one_gap}>
          <Onboard_10 />
        </View>
        <View style={styles.column_one_gap}>
          <Onboard_11 />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    width: "100%",
    flexDirection: 'row'
  },
  column_one: {
    marginRight: 5,
    marginVertical: 30,
  },
  column_two: {
    marginRight: 5,
  },
  column_one_gap: {
    marginVertical: 5,
  },
  column_two_gap: {
    marginVertical: 10,
  },
  column_left: {
    marginLeft: 10,
  },
});

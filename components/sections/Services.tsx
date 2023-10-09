import { View, StyleSheet, ScrollView, ColorSchemeName } from "react-native";

import SubIcon from "../../assets/svgs/Sub-Icon.svg";
import ProductIcon from "../../assets/svgs/product-icon.svg";
import MembershipIcon from "../../assets/svgs/membership-icon.svg";
import MailIcon from "../../assets/svgs/mail-icon.svg";
import ClaimsIcon from "../../assets/svgs/claims-icon.svg";
import BenefitsIcon from "../../assets/svgs/benefits-icon.svg";
import ServiceCard from "../Cards/ServiceCard";

type Props = {
  theme: ColorSchemeName;
  onPress: (title: string) => void;
};

const services: ServiceUi[] = [
  {
    title: "Claims",
    des: "Submit & Track",
    icon: <ClaimsIcon />,
  },
  {
    title: "Subcription",
    des: "Manage & Pay",
    icon: <SubIcon />,
  },
  {
    title: "Benefits",
    des: "View & Upgrade",
    icon: <BenefitsIcon />,
  },
  {
    title: "Membership",
    des: "Manage beneficiaries",
    icon: <MembershipIcon />,
  },
  {
    title: "Bomaid Mail",
    des: "Stay informed",
    icon: <MailIcon />,
  },
  {
    title: "Products",
    des: "Additional Cover",
    icon: <ProductIcon />,
  },
];
export default function Services(props: Props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      {services.map((s, i) => (
        <View key={i} style={styles.service}>
          <ServiceCard
            service={s}
            theme={props.theme}
            count={0}
            onPress={props.onPress}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  service: {
    width: "45%",
    marginVertical: 5,
    marginHorizontal: 8
  },
});

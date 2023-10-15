import { ColorSchemeName, Pressable, StyleSheet, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import ABSAIcon from "../../assets/svgs/absa_icon.svg";
import VISAIcon from "../../assets/svgs/visa_icon.svg";
import { Colors, Gilroy_FONTS } from "../../utils/constants";
import CustomText from "../Helpers/CustomText";
import { useState } from "react";

type Props = {
  theme: ColorSchemeName;
  methods: PaymentMethod[];
  nav?: () => void;
  onMethodIdChanged: (id: string) => void
};

type MethodProps = {
  theme: ColorSchemeName;
  method: PaymentMethod;
  default?: boolean;
  active: string;
  onChange: (id: string) => void;
  nav?: () => void;
};

function PaymentMethodCard(props: MethodProps) {
  function checkType() {
    if (props.method.type === "Bank Debit") {
      return {
        nav: false,
        text: `${props.method.type} Order ${props.method.card.slice(-4)}`,
        des: "Declined: Thu, sept 22 2022",
      };
    } else if (props.method.type === "Visa Card") {
      return {
        nav: false,
        text: `${props.method.type} Payment: ${props.method.card.slice(-4)}`,
        des: "Last Transaction: today",
      };
    }
    return {
      nav: true,
      text: `Add Alternative Method`,
      des: "to be considered: Mon, OCT 22 2022",
    };
  }
  return (
    <View style={styles.method}>
      <View style={styles.row}>
        <Pressable
          onPress={() => {
            if (checkType().nav && props.nav) {
              props.nav();
              return;
            }
            props.onChange(props.method.id);
          }}
          style={{
            ...styles.check,
            backgroundColor:
              props.active === props.method.id
                ? Colors.PRIMARY
                : Colors.NOCOLOR,
            borderWidth: props.active === props.method.id ? undefined : 1,
          }}
        >
          {props.active === props.method.id && (
            <Icon name="checkmark" color="white" size={16} />
          )}
        </Pressable>
        <View style={styles.details}>
          <CustomText
            display={checkType().text}
            font={Gilroy_FONTS.FONT_Medium}
            fontWeight="bold"
          />
          <CustomText
            display={checkType().des.toUpperCase()}
            font={Gilroy_FONTS.FONT_Bold}
            fontSize={10}
            color={Colors.GREY_3}
          />
        </View>
      </View>
      {checkType().nav ?  null : props.default ? <ABSAIcon /> : <VISAIcon />}
    </View>
  );
}

const initialCard: PaymentMethod = {
  card: "2398823632893",
  cvv: "223",
  exp: "12/34",
  id: "A1",
  lastTransaction: new Date(),
  type: "Bank Debit",
  name: 'Default Method'
};

export default function PaymentMethods(props: Props) {
  const [active, setActive] = useState(initialCard.id);
  return (
    <View style={styles.methods}>
      <PaymentMethodCard
        active={active}
        method={initialCard}
        onChange={(id) => {
          setActive(id)
          props.onMethodIdChanged('')
        }}
        theme={props.theme}
        default
      />
      {props.methods.map((m) => (
        <PaymentMethodCard
          active={active}
          method={m}
          onChange={(id) => {
            setActive(id)
            props.onMethodIdChanged(id)
          }}
          theme={props.theme}
          key={m.id}
        />
      ))}
      <PaymentMethodCard
        active={active}
        method={{ ...initialCard, type: "Action", id: "B1" }}
        onChange={(id) => setActive(id)}
        theme={props.theme}
        default
        nav={props.nav}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  method: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 8,
    borderBottomColor: Colors.BORDER_GREY,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },
  check: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderColor: Colors.BORDER_GREY,
    justifyContent: 'center',
    alignItems: 'center'
  },
  details: {
    marginLeft: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  methods: {
    borderRadius: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.BORDER_GREY,
    overflow: "hidden",
  },
});

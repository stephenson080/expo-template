import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ColorSchemeName,
  Appearance,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Checkbox from "react-native-ui-lib/checkbox";
import Actionsheet from "react-native-ui-lib/actionSheet";

import { Colors, Gilroy_FONTS } from "../../utils/constants";
import CustomText from "../../components/Helpers/CustomText";
import PageHeader from "../../components/Helpers/PageHeader";
import Title from "../../components/Helpers/Title";
import CardInput from "../../components/Forms/CardInput";
import ExpInput from "../../components/Forms/ExpInput";
import Input from "../../components/Forms/Input";

import Button from "../../components/Forms/Button";
import { useAppDispatch, useAppSelector } from "../../appStore/storeHooks";
import { SET_PAYMENTMETHODS } from "../../appStore/reducers/userReducer";

type Props = {
  plan: Plan;
  theme: ColorSchemeName;
};
function CurrentPlan(props: Props) {
  return (
    <View style={styles.plan}>
      <View>
        <CustomText
          display={props.plan.title}
          font={Gilroy_FONTS.FONT_Semi_Bold}
          color="white"
          fontSize={20}
        />
        <CustomText
          display={"M + 3CD"}
          font={Gilroy_FONTS.FONT_Semi_Bold}
          color={Colors.PRIMARY}
          fontSize={10}
        />
      </View>
      <View>
        <CustomText
          display={`P ${props.plan.prize}`}
          font={Gilroy_FONTS.FONT_Semi_Bold}
          color="white"
          fontSize={20}
          textAlign="right"
        />
        <CustomText
          display={"MONTHLY"}
          font={Gilroy_FONTS.FONT_Semi_Bold}
          color={Colors.GREY_3}
          fontSize={10}
          textAlign="right"
        />
      </View>
    </View>
  );
}

export default function AddPaymentMethodScreen({ navigation }: any) {
  const [background, setBackground] = useState(Appearance.getColorScheme());
  const [state, setState] = useState<PaymentMethod>({
    card: "",
    cvv: "",
    exp: "",
    id: "",
    lastTransaction: new Date(),
    name: "",
    type: "Visa Card",
  });
  const [addMethod, setAddmethod] = useState(true);

  const [uiState, setUiState] = useState({
    cardError: false,
    cvvError: false,
    expError: false,
    nameError: false,
    laading: false,
    formError: true,
    visible: false,
  });

  const { plan, paymentMethods } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch()
  useEffect(() => {
    Appearance.addChangeListener(() => {
      getTheme();
    });
  }, []);

  function isDark() {
    return background === "dark";
  }

  function onFormChanged(id: "card" | "name" | "cvv" | "exp", value: string) {
    let formError = uiState.formError;
    switch (id) {
      case "card":
        setState({ ...state, card: value });
        if (!value) {
          setUiState({ ...uiState, cardError: true, formError: true });
          return;
        }
        formError =
          !state.cvv ||
          !state.exp ||
          !state.name ||
          uiState.cvvError ||
          uiState.expError ||
          uiState.nameError;
        setUiState({ ...uiState, formError, cardError: false });
        return;
      case "cvv":
        setState({ ...state, cvv: value });
        if (!value) {
          setUiState({ ...uiState, cvvError: true, formError: true });
          return;
        }
        formError =
          !state.card ||
          !state.exp ||
          !state.name ||
          uiState.cardError ||
          uiState.expError ||
          uiState.nameError;
        setUiState({ ...uiState, formError, cvvError: false });
        return;
      case "exp":
        setState({ ...state, exp: value });
        if (!value) {
          setUiState({ ...uiState, expError: true, formError: true });
          return;
        }
        formError =
          !state.card ||
          !state.cvv ||
          !state.name ||
          uiState.cardError ||
          uiState.cvvError ||
          uiState.nameError;
        setUiState({ ...uiState, formError, expError: false });
        return;

      case "name":
        setState({ ...state, name: value });
        if (!value) {
          setUiState({ ...uiState, nameError: true, formError: true });
          return;
        }
        formError =
          !state.card ||
          !state.cvv ||
          !state.exp ||
          uiState.cardError ||
          uiState.cvvError ||
          uiState.expError;
        setUiState({ ...uiState, formError, nameError: false });
        return;
    }
  }

  function getTheme() {
    const _colorScheme = Appearance.getColorScheme();
    setBackground(_colorScheme);
  }

  function onAddMethod(){
    if (!addMethod) {
        setUiState({...uiState, visible: true})
        return 
    }
    const method = {...state}
    method.id = new Date().toString()
    const existMethod = paymentMethods.find(m => m.card === method.card)
    if (existMethod) {
        setState(existMethod)
        setUiState({...uiState, visible: true})
        return 
    }
    const newMethods = [...paymentMethods]
    newMethods.push(method)
    dispatch(SET_PAYMENTMETHODS(newMethods))
    setState(method)
    setUiState({...uiState, visible: true})
  }
  return (
    <KeyboardAvoidingView
      style={{
        ...styles.container,
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Actionsheet
        visible={uiState.visible}
        cancelButtonIndex={2}
        onDismiss={() => {
          setUiState({ ...uiState, visible: false });
        }}
        renderAction={(options, index, onPress) => {
          if (index === 0) {
            return <CurrentPlan plan={plan} theme={background} />;
          }
          return (
            <View style={{paddingVertical: 10}}>
              <CustomText
                display="Pay"
                font={Gilroy_FONTS.FONT_Black}
                textAlign="center"
                color="white"
                onPress={() => {navigation.navigate('confirmation', {plan, method: state})}}
              />
            </View>
          );
        }}
        options={[
          { label: "Hello", onPress: () => {}, id: "1" },
          {
            label: "Pay",
            onPress: () => {navigation.navigate('confirmation', {plan, method: state})},
            id: "2",
            labelStyle: styles.payButton,
          },
        ]}
        containerStyle={{ backgroundColor: "#212124" }}
        useNativeIOS={Platform.OS === "ios"}
      />
      <View style={styles.padd}>
        <PageHeader
          theme={background}
          navigation={navigation}
          page="Pay By Card"
          subPage="SUBSCRIPTION"
        />
      </View>
      <Title theme={background} title="PAYMENT METHOD" />
      <View style={styles.padd}>
        <Input
          onChangeText={(v) => {
            onFormChanged("name", v);
          }}
          placeholder=""
          theme={background}
          label="Cardholder Name"
          error={uiState.nameError}
          errorMessage="Name is required Field"
        />
        <CardInput
          onChangeText={(v) => {
            onFormChanged("card", v);
          }}
          placeholder="Card Number"
          theme={background}
          label="Card Number"
          error={uiState.cardError}
          errorMessage="Card number is required"
        />
        <ExpInput
          onChangeText={(v) => {
            onFormChanged("exp", v);
          }}
          placeholder="Expiration Date"
          theme={background}
          label="Expiry Date"
          error={uiState.expError}
          errorMessage="Expiry date is required"
        />
        <Input
          onChangeText={(v) => {
            onFormChanged("cvv", v);
          }}
          placeholder="***"
          theme={background}
          label="CVV"
          error={uiState.cvvError}
          errorMessage="Cvv is required Field"
          maxLength={3}
          keyboardType="numeric"
          secureTextEntry
        />
        <View>
          <CustomText
            display="Add as Alternative Payment Method"
            font={Gilroy_FONTS.FONT_Semi_Bold}
          />
          <Checkbox
            label="Yes"
            color={addMethod ? Colors.PRIMARY : Colors.BORDER_GREY}
            value={addMethod}
            onValueChange={() => setAddmethod(true)}
            labelStyle={styles.checkbox}
            containerStyle={{ marginVertical: 3 }}
          />
          <Checkbox
            label="No"
            color={!addMethod ? Colors.PRIMARY : Colors.BORDER_GREY}
            value={!addMethod}
            onValueChange={() => setAddmethod(false)}
            labelStyle={styles.checkbox}
            containerStyle={{ marginVertical: 3 }}
          />
        </View>
        <View>
          <Button
            foreColor={"black"}
            theme={background}
            tintColor="white"
            title="Next"
            paddingVertical={10}
            disabled={uiState.formError}
            onPress={onAddMethod}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_1,
    paddingVertical: 15
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  padd: {
    paddingHorizontal: 15,
  },
  checkbox: {
    fontFamily: Gilroy_FONTS.FONT_Regular,
    fontSize: 14,
  },
  payButton: {
    textAlign: "center",
    fontFamily: Gilroy_FONTS.FONT_Medium,
    fontSize: 20,
    color: "white",
  },
  plan: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomColor: "#3C3C435C",
    borderBottomWidth: 0.5,
  },
});

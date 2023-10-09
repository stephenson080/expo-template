export const BASE_URL = "https://spaces-backend.herokuapp.com/";

export enum Colors {
  PRIMARY = "#0C90D2",
  SECONDARY = "#0E0E2C",
  DARK_MODE_BASE = "#121212",
  D_M_E_1 = "#161618",
  D_M_E_2 = "#212124",
  D_M_E_3 = "#818181",
  D_M_E_4 = "#1C1C1E",
  BACKGROUND_1 = "white",
  TEXT1 = "#898989",
  GREY = "#F8F9FB",
  DARK2 = "#1E1E1E",
  TEXT_DARK = "#FAFAFA",
  FAILURE = "#EB5757",
  WARNING = "#F2994A",
  NOCOLOR = "transparent",
  TEXT_DARK_MODE = "#E6E9ED",
  BORDER_LIGHT_MODE = "#1824271A",
  TEXT_LIGHT_MODE = "#182427",
  GREY_2 = "#E6E9ED",
  GERY_900 = '#707070',
  GREY_Text = '#858585',
  BORDER_GREY = '#E9EBEC',
  GREY_3 = '#ABABAB',
  GREY_BACKGROUND ='#F7F7F7',
  DARK_MODE_GREY = '#818181',
  Purple = '#998CEC',
  Green = '#1AC37A'
}

export enum Gilroy_FONTS {
  FONT_Black = "FONT_Black",
  FONT_Black_Italic = "FONT_Black_Italic",
  FONT_Bold = "FONT_Bold",
  FONT_Bold_Italic = "FONT_Bold_Italic",
  FONT_Semi_Bold = "FONT_Semi_Bold",
  FONT_Semi_Bold_Italic = "FONT_Semi_Bold_Italic",
  FONT_Light = "FONT_Light",
  FONT_Light_Italic = "FONT_Light_Italic",
  FONT_Medium = "FONT_Medium",
  FONT_Medium_Italic = "FONT_Medium_Italic",
  FONT_Regular = "FONT_Regular",
  FONT_Regular_Italic = "FONT_Regular_Italic",
  FONT_Thin = "FONT_Thin",
  FONT_Thin_Italic = "FONT_Thin_Italic",
  HOUSC_Regular="HOUSC_Regular"
}

export enum HOUSC_FONTS {
  HOUSC_Regular="HOUSC_Regular"
}

export const onboard: { title1: string; title2: string; details: string; image: any }[] = [
  {
    title1: "Manage",
    title2: 'Subscriptions',
    details:
      "Update your debit order information, present a digital membership card or pay your subscription.",
    image: require("../assets/images/image_1.png"),
  },
  {
    title1: "Live Chat &",
    title2: 'Member Support',
    details:
      "It's never been easier to manage your membership. Ask a question and get an instant personalised answer.",
    image: require("../assets/images/image_2.png"),
  },
  {
    title1: "Apply for",
    title2: 'Additional Cover',
    details:
      "Submit your travel insurance or additional funeral benefit application at your convenience.",
    image: require("../assets/images/image_3.png"),
  },
  {
    title1: "Track Claims &",
    title2: "Benefit Limits",
    details:
      "Appreciate your cover package and track the usage of you benefit.",
    image: require("../assets/images/image_4.png"),
  },
  {
    title1: "Membership Self",
    title2: "service",
    details:
      "On this platform you can Update your KYC Information and add dependents or a spouse to your cover.",
    image: require("../assets/images/image_5.png"),
  },
];

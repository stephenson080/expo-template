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
  GERY_900 = "#707070",
  GREY_Text = "#858585",
  BORDER_GREY = "#E9EBEC",
  GREY_3 = "#ABABAB",
  GREY_BACKGROUND = "#F7F7F7",
  DARK_MODE_GREY = "#818181",
  Purple = "#998CEC",
  Green = "#1AC37A",
  Orange = "#FEAE50CC",
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
}

export enum HOUSC_FONTS {
  HOUSC_Regular = "HOUSC_Regular",
}

export enum Poppins_FONTS {
  FONT_Black = "Poppins_FONT_Black",
  FONT_Black_Italic = "Poppins_FONT_Black_Italic",
  FONT_Bold = "Poppins_FONT_Bold",
  FONT_Bold_Italic = "Poppins_FONT_Bold_Italic",
  FONT_Semi_Bold = "Poppins_FONT_Semi_Bold",
  FONT_Semi_Bold_Italic = "Poppins_FONT_Semi_Bold_Italic",
  FONT_Light = "Poppins_FONT_Light",
  FONT_Light_Italic = "Poppins_FONT_Light_Italic",
  FONT_Medium = "Poppins_FONT_Medium",
  FONT_Medium_Italic = "Poppins_FONT_Medium_Italic",
  FONT_Regular = "Poppins_FONT_Regular",
  FONT_Regular_Italic = "Poppins_FONT_Regular_Italic",
  FONT_Thin = "Poppins_FONT_Thin",
  FONT_Thin_Italic = "Poppins_FONT_Thin_Italic",
}

export const onboard: {
  title1: string;
  title2: string;
  details: string;
  image: any;
}[] = [
  {
    title1: "Manage",
    title2: "Subscriptions",
    details:
      "Update your debit order information, present a digital membership card or pay your subscription.",
    image: require("../assets/images/image_1.png"),
  },
  {
    title1: "Live Chat &",
    title2: "Member Support",
    details:
      "It's never been easier to manage your membership. Ask a question and get an instant personalised answer.",
    image: require("../assets/images/image_2.png"),
  },
  {
    title1: "Apply for",
    title2: "Additional Cover",
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

export const plans: Plan[] = [
  {
    statements: [{
      date: new Date(2023, 10, 9),
      id: 1,
      prize: 2239,
      status: 'active',
      type: 'Card'
    },
    {
      date: new Date(2023, 5, 3),
      id: 2,
      prize: 20,
      status: 'active',
      type: 'Debit Order'
    },
    {
      date: new Date(2023, 4, 1),
      id: 3,
      prize: 103,
      status: 'active',
      type: 'Debit Order'
    },
    {
      date: new Date(2023, 1, 5),
      id: 4,
      prize: 20,
      status: 'active',
      type: 'Debit Order'
    }, {
      date: new Date(2023, 3, 29),
      id: 5,
      prize: 20,
      status: 'failed',
      type: 'Debit Order'
    },
    {
      date: new Date(2023, 6, 17),
      id: 6,
      prize: 103,
      status: 'active',
      type: 'Card'
    },
    {
      date: new Date(2023, 1, 5),
      id: 7,
      prize: 20,
      status: 'failed',
      type: 'Debit Order'
    }],
    benefits: [
      {
        id: 1,
        name: "Inpatient & Outpatient Benefits",
      },
      {
        id: 2,
        name: "Managed Care Benefits",
      },
      {
        id: 3,
        name: "Dental & Optical Benefits",
      },
      {
        id: 4,
        name: "Maternity Care Program",
      },
      {
        id: 5,
        name: "Screening & Prevention Benefit",
      },
      {
        id: 6,
        name: "P2 million Travel Insurance Cover",
      },
      {
        id: 7,
        name: "Funeral Benefit",
      },
      {
        id: 8,
        name: "Wellness Benefit",
      },
    ],
    color: Colors.Green,
    createdAt: new Date(2023, 9, 9),
    desc: "A low cost, no co-payment health plan.",
    dueAt: new Date(2023, 9, 10),
    id: 1,
    prize: 278,
    status: "active",
    title: "Health Plan AS",
    type: "Budget Option",
  },
  {
    statements: [{
      date: new Date(2023, 10, 9),
      id: 1,
      prize: 2239,
      status: 'active',
      type: 'Card'
    },
    {
      date: new Date(2023, 5, 3),
      id: 2,
      prize: 20,
      status: 'active',
      type: 'Debit Order'
    },
    {
      date: new Date(2023, 4, 1),
      id: 3,
      prize: 103,
      status: 'active',
      type: 'Debit Order'
    },
    {
      date: new Date(2023, 1, 5),
      id: 4,
      prize: 20,
      status: 'active',
      type: 'Debit Order'
    }, {
      date: new Date(2023, 3, 29),
      id: 5,
      prize: 20,
      status: 'failed',
      type: 'Debit Order'
    },
    {
      date: new Date(2023, 6, 17),
      id: 6,
      prize: 103,
      status: 'active',
      type: 'Card'
    },
    {
      date: new Date(2023, 1, 5),
      id: 7,
      prize: 20,
      status: 'failed',
      type: 'Debit Order'
    }],
    benefits: [
      {
        id: 1,
        name: "Inpatient & Outpatient Benefits",
      },
      {
        id: 2,
        name: "Managed Care Benefits",
      },
      {
        id: 3,
        name: "Dental & Optical Benefits",
      },
      {
        id: 4,
        name: "Maternity Care Program",
      },
      {
        id: 5,
        name: "Screening & Prevention Benefit",
      },
      {
        id: 6,
        name: "P2 million Travel Insurance Cover",
      },
      {
        id: 7,
        name: "Funeral Benefit",
      },
      {
        id: 8,
        name: "Wellness Benefit",
      },
    ],
    color: Colors.PRIMARY,
    createdAt: new Date(2023, 9, 9),
    desc: "For young, healthy individuals & start-up families.",
    dueAt: new Date(2023, 9, 10),
    id: 2,
    prize: 845,
    status: "active",
    title: "Health Plan A",
    type: "Popular Option",
  },
  {
    statements: [{
      date: new Date(2023, 10, 9),
      id: 1,
      prize: 2239,
      status: 'active',
      type: 'Card'
    },
    {
      date: new Date(2023, 5, 3),
      id: 2,
      prize: 20,
      status: 'active',
      type: 'Debit Order'
    },
    {
      date: new Date(2023, 4, 1),
      id: 3,
      prize: 103,
      status: 'active',
      type: 'Debit Order'
    },
    {
      date: new Date(2023, 1, 5),
      id: 4,
      prize: 20,
      status: 'active',
      type: 'Debit Order'
    }, {
      date: new Date(2023, 3, 29),
      id: 5,
      prize: 20,
      status: 'failed',
      type: 'Debit Order'
    },
    {
      date: new Date(2023, 6, 17),
      id: 6,
      prize: 103,
      status: 'active',
      type: 'Card'
    },
    {
      date: new Date(2023, 1, 5),
      id: 7,
      prize: 20,
      status: 'failed',
      type: 'Debit Order'
    }],
    benefits: [
      {
        id: 1,
        name: "Inpatient & Outpatient Benefits",
      },
      {
        id: 2,
        name: "Managed Care Benefits",
      },
      {
        id: 3,
        name: "Dental & Optical Benefits",
      },
      {
        id: 4,
        name: "Maternity Care Program",
      },
      {
        id: 5,
        name: "Screening & Prevention Benefit",
      },
      {
        id: 6,
        name: "P2 million Travel Insurance Cover",
      },
      {
        id: 7,
        name: "Funeral Benefit",
      },
      {
        id: 8,
        name: "Wellness Benefit",
      },
    ],
    color: Colors.Purple,
    createdAt: new Date(2023, 9, 9),
    desc: "An upgrade that includes the Travel Insurance cover.",
    dueAt: new Date(2023, 9, 10),
    id: 3,
    prize: 1478,
    status: "active",
    title: "Health Plan B",
    type: "Growth Option",
  },
  {
    statements: [{
      date: new Date(2023, 10, 9),
      id: 1,
      prize: 2239,
      status: 'active',
      type: 'Card'
    },
    {
      date: new Date(2023, 5, 3),
      id: 2,
      prize: 20,
      status: 'active',
      type: 'Debit Order'
    },
    {
      date: new Date(2023, 4, 1),
      id: 3,
      prize: 103,
      status: 'active',
      type: 'Debit Order'
    },
    {
      date: new Date(2023, 1, 5),
      id: 4,
      prize: 20,
      status: 'active',
      type: 'Debit Order'
    }, {
      date: new Date(2023, 3, 29),
      id: 5,
      prize: 20,
      status: 'failed',
      type: 'Debit Order'
    },
    {
      date: new Date(2023, 6, 17),
      id: 6,
      prize: 103,
      status: 'active',
      type: 'Card'
    },
    {
      date: new Date(2023, 1, 5),
      id: 7,
      prize: 20,
      status: 'failed',
      type: 'Debit Order'
    }],
    benefits: [
      {
        id: 1,
        name: "Inpatient & Outpatient Benefits",
      },
      {
        id: 2,
        name: "Managed Care Benefits",
      },
      {
        id: 3,
        name: "Dental & Optical Benefits",
      },
      {
        id: 4,
        name: "Maternity Care Program",
      },
      {
        id: 5,
        name: "Screening & Prevention Benefit",
      },
      {
        id: 6,
        name: "P2 million Travel Insurance Cover",
      },
      {
        id: 7,
        name: "Funeral Benefit",
      },
      {
        id: 8,
        name: "Wellness Benefit",
      },
    ],
    color: Colors.Orange,
    createdAt: new Date(2023, 9, 9),
    desc: "Elite cover & a dedicated support liaison ",
    dueAt: new Date(2023, 9, 10),
    id: 4,
    prize: 2148,
    status: "pending",
    title: "Health Plan C",
    type: "Premier Option",
  },
];

export const paymentMethods: PaymentMethod[] = [];

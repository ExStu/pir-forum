import type React from "react";

import type { Theme } from "@mui/material";
import { createTheme } from "@mui/material";

import colors from "./colors";
import components from "./components";
import typography from "./typography";

declare module "@mui/material/styles" {
  interface Palette {
    gradients: typeof colors.gradients;
    uncategorized: typeof colors.uncategorized;
  }

  interface PaletteOptions {
    gradients?: typeof colors.gradients;
    uncategorized?: typeof colors.uncategorized;
  }

  interface PaletteColor {
    fillPink?: string;
    fillBlue?: string;
    radial?: string;
    borderPurple?: string;
    borderPink?: string;
    borderBlue?: string;
    borderLightWhite?: string;
    backgroundLightWhite?: string;
  }

  interface SimplePaletteColorOptions {
    fillPink?: string;
    fillBlue?: string;
    radial?: string;
    borderPurple?: string;
    borderPink?: string;
    borderBlue?: string;
    borderLightWhite?: string;
    backgroundLightWhite?: string;
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    text1: React.CSSProperties;
    text2: React.CSSProperties;
    extraH1: React.CSSProperties;
    extraH2: React.CSSProperties;
    extraH3: React.CSSProperties;
    extraH4: React.CSSProperties;
    extraBody1: React.CSSProperties;
    extraBody2: React.CSSProperties;
    extraBody3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    text1?: React.CSSProperties;
    text2?: React.CSSProperties;
    extraH1?: React.CSSProperties;
    extraH2?: React.CSSProperties;
    extraH3?: React.CSSProperties;
    extraH4?: React.CSSProperties;
    extraBody1?: React.CSSProperties;
    extraBody2?: React.CSSProperties;
    extraBody3?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    text1: true;
    text2: true;
    extraH1: true;
    extraH2: true;
    extraH3: true;
    extraH4: true;
    extraBody1: true;
    extraBody2: true;
    extraBody3: true;
  }
}

const forumTheme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1178,
      xl: 1400,
    },
  },
  palette: {
    ...colors,
  },
  typography: {
    ...typography,
  },
  components: {
    ...components,
  },
});

export default forumTheme;

const components = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        body1: "p",
        body2: "p",
        body3: "p",
        text1: "p",
        text2: "p",
        extraH1: "h1",
        extraH2: "h2",
        extraH3: "h3",
        extraH4: "h4",
        extraBody1: "p",
        extraBody2: "p",
        extraBody3: "p",
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
};

export default components;

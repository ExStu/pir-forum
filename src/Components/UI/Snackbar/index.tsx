import type { FC } from "react";
import React from "react";

import type { SlideProps, SnackbarProps } from "@mui/material";
import { Slide, useMediaQuery, useTheme } from "@mui/material";

import { SSnackbar } from "./styled";

const Snackbar: FC<SnackbarProps> = (props) => <SSnackbar {...props} />;

export const SlideTransition = (props: SlideProps) => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.only("xs"));

  return <Slide {...props} direction={isMobile ? "up" : "left"} />;
};

export default Snackbar;

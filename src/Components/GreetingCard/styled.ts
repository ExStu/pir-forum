import { motion } from "framer-motion";

import { styled } from "@mui/material/styles";

import IconButton from "@Components/UI/Button/IconButton";

import logoBg from "@assets/images/greetings/logo-bg.svg?url";

interface ISGreetingCard {
  expanded: boolean;
}

export const SGreetingCard = styled(motion.article)<ISGreetingCard>(
  ({ theme: { palette }, expanded }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: "48px",
    minHeight: "468px",
    // width: expanded ? "48%" : "24%",
    gap: "16px",
    backgroundColor: palette.uncategorized.background.darkSlate,
    borderRadius: "16px",
    backgroundImage: `url(${logoBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right top",
    backgroundSize: "116px 283px",
    overflow: "hidden",
    cursor: "pointer",
  }),
);

export const SGreetingCardActionWrap = styled("div")(({ theme: { palette } }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "68px",
  backgroundColor: palette.secondary.main,
}));

export const SGreetingCardActionBtnWrap = styled("div")(({ theme: { palette } }) => ({
  position: "absolute",
  bottom: "16px",
  left: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "6px",
  borderRadius: "50%",
  backgroundColor: palette.secondary.main,
}));

export const SGreetingCardActionBtn = styled(IconButton)(({ theme: { palette } }) => ({
  backgroundColor: palette.uncategorized.background.darkSlate,
  borderRadius: "50%",

  "&:hover": {
    backgroundColor: palette.common.white,
  },
}));

export const SGreetingCardImg = styled("img")(() => ({
  fontSize: 0,
  position: "absolute",
  bottom: 0,
  right: 0,
}));

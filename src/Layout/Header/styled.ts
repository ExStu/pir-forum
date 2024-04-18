import { motion } from "framer-motion";

import { styled } from "@mui/material/styles";

import List from "@Components/UI/List";

export const SHeader = styled("header")(({ theme: { palette } }) => ({
  padding: "16px 0",
  borderBottom: `1px solid ${palette.uncategorized.borderLightWhite}`,
}));

export const SHeaderWrap = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const SHeaderLinks = styled(List)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
}));

export const SHeaderPartnerLinks = styled(List)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
}));

export const SHeaderDropdownWrap = styled("div")(() => ({
  position: "relative",
}));

export const SHeaderDropdownList = styled(motion.div)(() => ({
  paddingTop: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

export const SHeaderDropdownItem = styled("div")(({ theme: { palette } }) => ({
  padding: "8px 12px",
  borderRadius: "8px",
  backgroundColor: palette.uncategorized.backgroundLightWhite,
}));

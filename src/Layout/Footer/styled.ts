import { styled } from "@mui/material/styles";

import List from "@Components/UI/List";

export const SFooter = styled("footer")(({ theme: { palette } }) => ({
  padding: "48px 0",
  borderTop: `1px solid ${palette.uncategorized.borderLightWhite}`,
}));

export const SFooterWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "15%",
}));

export const SFooterMain = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  maxWidth: "19%",
}));

export const SFooterBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

export const SFooterBlockList = styled(List)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

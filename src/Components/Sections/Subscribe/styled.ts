import { styled } from "@mui/material/styles";

import Typography from "@Components/UI/Typography";

export const SSubscribe = styled("section")(() => ({
  paddingTop: "60px",
  paddingBottom: "120px",
}));

export const SSubscribeTitle = styled(Typography)(() => ({
  maxWidth: "47%",
}));

export const SSubscribeWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "24px",
}));

export const SSubscribeForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "35%",
  height: "132px",
}));

// export const SSubscribeFormWrap = styled("div")(() => ({
//   display: "flex",
//   flexDirection: "column",
//   gap: "12px",
// }));

export const SSubscribeInputWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  width: "100%",
}));

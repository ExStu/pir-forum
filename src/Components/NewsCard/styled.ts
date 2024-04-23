import { styled } from "@mui/material/styles";

export const SNewsCard = styled("article")(({ theme: { palette } }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: "32px",
  borderRadius: "16px",
  backgroundColor: "transparent",

  "&::before": {
    content: "''",
    position: "absolute",
    inset: 0,
    borderRadius: "16px",
    border: "1px solid transparent",
    background: `${palette.gradients.borderPink} border-box`,
    mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
    zIndex: -1,
  },
}));

export const SNewsCardImg = styled("img")(() => ({
  fontSize: 0,
  marginBottom: "32px",
}));

export const SNewsCardTextWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginBottom: "32px",
}));

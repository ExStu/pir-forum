import { styled } from "@mui/material/styles";

export const SProgram = styled("section")(() => ({
  padding: "60px 0",
  position: "relative",
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url(/projects-bg.svg)",
    backgroundSize: "20%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right -52px top 20px",
    opacity: 0.7,
    zIndex: -1,
  },
}));

export const SProgramTitle = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "96px",
}));

export const SProgramSubtitle = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginBottom: "96px",
  textAlign: "center",
  textTransform: "uppercase",
}));

export const SProgramCardsBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",

  "&:not(first-of-type)": {
    marginTop: "96px",
  },
}));

export const SProgramCardsWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "32px",
}));

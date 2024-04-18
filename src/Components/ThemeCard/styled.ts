import { styled } from "@mui/material/styles";

export const SThemeCard = styled("article")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  gap: "16px",
  borderRadius: "16px",
  backgroundColor: palette.uncategorized.backgroundWhite[50],
}));

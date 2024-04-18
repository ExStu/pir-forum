import { styled } from "@mui/material/styles";

export const SSpecialProjectCard = styled("article")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "48px",
  gap: "20px",
  borderRadius: "0 16px 16px 16px",
  background: palette.gradients.cardPurple,
  border: `1px solid ${palette.uncategorized.borderBlueDark}`,
}));

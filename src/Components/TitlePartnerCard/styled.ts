import { styled } from "@mui/material/styles";

export const STitlePartnerCard = styled("li")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "44px 96px",
  gap: "28px",
  borderRadius: "2px",
  background: palette.gradients.cardPurple,
  border: `1px solid ${palette.uncategorized.borderBlueDark}`,
}));

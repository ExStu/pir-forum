import { styled } from "@mui/material/styles";

export const SPartnerCard = styled("li")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "42px 36px",
  gap: "16px",
  borderRadius: "8px",
  background: palette.uncategorized.backgroundWhite[50],
  border: `1px solid ${palette.uncategorized.borderBlueDark}`,
}));

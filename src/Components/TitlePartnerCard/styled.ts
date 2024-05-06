import { styled } from "@mui/material/styles";

export const STitlePartnerCard = styled("li")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "44px 24px",
  gap: "28px",
  borderRadius: "2px",
  background: palette.gradients.cardPurple,
  border: `1px solid ${palette.uncategorized.borderBlueDark}`,

  "& img": {
    maxWidth: "308px",
  },
}));

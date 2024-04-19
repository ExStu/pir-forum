import { styled } from "@mui/material/styles";

import Typography from "@Components/UI/Typography";

export const SPartners = styled("section")(() => ({
  padding: "60px 0",
  // backgroundImage: "url(/projects-bg.svg)",
  // backgroundSize: "45%",
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "left top",
}));

export const SPartnersSectionTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "32px",
}));

export const SPartnersSubtitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  textAlign: "center",
  marginBottom: "44px",
}));

export const SPartnersCarouselItem = styled("div")(() => ({
  // width: "240px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

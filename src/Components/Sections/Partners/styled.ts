import { styled } from "@mui/material/styles";

import List from "@Components/UI/List";
import Typography from "@Components/UI/Typography";

export const SPartners = styled("section")(() => ({
  padding: "60px 0",
  backgroundImage: "url(/partners-bg.svg)",
  backgroundSize: "45%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left -60% top -72px",
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

export const SPartnersCarouselWrap = styled("div")(() => ({
  marginBottom: "132px",
}));

export const SPartnersCarouselItem = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SPartnersTitledList = styled(List)(() => ({
  display: "flex",
  gap: "8px",
  marginBottom: "68px",
}));

export const SPartnersList = styled(List)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  gap: "16px",
  marginBottom: "80px",
}));

export const SPartnersShowMoreBtnWrap = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

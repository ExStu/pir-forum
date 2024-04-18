import { styled } from "@mui/material/styles";

import Typography from "@Components/UI/Typography";

export const SHero = styled("section")(() => ({
  paddingTop: "92px",
  paddingBottom: "34px",
}));

export const SHeroTop = styled("div")(() => ({
  display: "flex",
  gap: "64px",
  marginBottom: "120px",
}));

export const SHeroTopContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

export const SHeroTopContentDateWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "100px",
}));

export const SHeroTopContentDate = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const SHeroTopContentTitles = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginBottom: "auto",
  width: "100%",
}));

export const SHeroTopContentTitlesBorder = styled("span")(
  ({ theme: { palette } }) => ({
    display: "block",
    height: "6px",
    width: "70%",
    backgroundColor: palette.primary.light,
  }),
);

export const SHeroBottom = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const SHeroBottomTitle = styled(Typography)(() => ({
  maxWidth: "56%",
}));

export const SHeroBottomStatsWrap = styled("div")(() => ({
  display: "flex",
  gap: "24px",
}));

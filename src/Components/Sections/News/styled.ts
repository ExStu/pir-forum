import { styled } from "@mui/material/styles";

import Typography from "@Components/UI/Typography";

export const SNews = styled("section")(() => ({
  padding: "60px 0",
}));

export const SNewsTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "32px",
}));

export const SNewsList = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "28px",
}));

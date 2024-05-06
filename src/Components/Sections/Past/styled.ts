import { styled } from "@mui/material/styles";

export const SPast = styled("section")(() => ({
  padding: "60px 0",
}));

export const SPastSlidesWrap = styled("div")(() => ({
  display: "flex",
  gap: "24px",
  width: "100%",
}));

export const SPastSlideSideWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "100%",
}));

export const SPastSlideImg = styled("img")(() => ({
  fontSize: 0,
  width: "100%",
  height: "calc((512px / 2) - 12px)",
  borderRadius: "12px",
}));

export const SPastSLideBigImg = styled("img")(() => ({
  fontSize: 0,
  width: "50%",
  height: "512px",
  borderRadius: "12px",
}));

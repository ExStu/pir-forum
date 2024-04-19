import { styled } from "@mui/material/styles";

export const SCarouselBtn = styled("button")(({ theme: { palette } }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  // padding: "4px",
  width: "58px",
  height: "58px",
  backgroundColor: palette.common.black,
  position: "absolute",
  top: "-262%",
  zIndex: 2,
  transform: "translateY(-50%)",
  cursor: "pointer",
  outline: "none",
  border: `1px solid ${palette.uncategorized.borderC.black}`,
  borderRadius: "50%",
  transition: "background-color .15s ease-in, border-color .15s ease-in",

  "& svg": {
    transition: "color .15s ease-in",
    color: palette.secondary.main,
  },

  "&:hover": {
    backgroundColor: palette.secondary.light,
    borderColor: palette.secondary.light,
  },

  "&:hover svg": {
    color: palette.common.white,
  },

  "&:disabled": {
    backgroundColor: palette.common.black,
    opacity: "0.3",
  },

  "&[disabled]:hover": {
    backgroundColor: "transparent",
    borderColor: palette.uncategorized.borderC.black,
  },

  "&[disabled]:hover svg": {
    color: palette.secondary.main,
  },
}));

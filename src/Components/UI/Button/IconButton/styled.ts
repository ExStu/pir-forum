import IconButton, { iconButtonClasses } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

import type { IIconButton } from "./types";

export const SIconButton = styled(IconButton, {
  shouldForwardProp: (props: string) => !["variant", "bgColor"].includes(props),
})<IIconButton>(({ theme: { palette }, variant = "contained", bgColor = "primary" }) => ({
  // [`&.${iconButtonClasses.root}`]: {
  //   height: "60px",
  //   width: "60px",
  // },
  ...(variant === "contained" && {
    borderRadius: "4px",
    backgroundColor: palette[bgColor].main,
    color: palette.common.white,
    "&:hover, &:focus-visible": {
      background: palette[bgColor].light,
    },
    "&:active": {
      background: palette[bgColor].dark,
    },
  }),
  ...(variant === "outlined" && {
    borderRadius: "16px",
    border: `1px solid ${palette.uncategorized.borderLightWhite}`,
    backgroundColor: palette.uncategorized.backgroundLightWhite,
    color: palette.common.white,
    "&:hover, &:focus-visible": {
      backgroundColor: palette.secondary.light,
      // svg: {
      //   path: {
      //     fill: palette.uncategorized.white,
      //   },
      // },
    },
    "&:active": {
      background: palette.secondary.dark,
      // svg: {
      //   path: {
      //     fill: palette.uncategorized.white,
      //   },
      // },
    },
  }),

  ...(variant === "text" && {
    borderRadius: "none",
    border: "none",
    color: palette.primary.main,
    backgroundColor: "transparent",
    "& svg path[fill]": {
      fill: palette.secondary.main,
    },
    "& svg path[stroke]": {
      stroke: palette.secondary.main,
    },
    "&:hover, &:focus-visible": {
      backgroundColor: "transparent",
      "& svg path[fill]": {
        fill: palette.secondary.light,
      },
      "& svg path[stroke]": {
        stroke: palette.secondary.light,
      },
    },
    "&:active": {
      backgroundColor: "transparent",
      "& svg path[fill]": {
        fill: palette.secondary.dark,
      },
      "& svg path[stroke]": {
        stroke: palette.secondary.dark,
      },
    },
  }),

  [`&.${iconButtonClasses.disabled}`]: {
    backgroundColor: palette.grey[50],
    border: "none",
    color: palette.text.disabled,
    svg: {
      path: {
        fill: palette.text.disabled,
      },
    },
  },

  [`&.${iconButtonClasses.sizeMedium}`]: {
    height: "60px",
    width: "60px",
    minWidth: ["32px", "60px"],
  },

  [`&.${iconButtonClasses.sizeLarge}`]: {
    height: "76px",
    width: "110px",
    borderRadius: "20px",

    "& svg": {
      width: "48px",
      height: "48px",
    },
  },
}));

import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

import mq from "@theme/breakpoints";

import type { ILink } from "./types";

export const SLink = styled(Link, {
  shouldForwardProp: (props: string) => !["customColor, variant"].includes(props),
})<ILink>(({ theme: { palette, typography }, customColor, variant = "body2" }) =>
  mq({
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: "8px",
    color: customColor || palette.common.white,
    fontSize: typography[variant].fontSize,
    fontWeight: typography[variant].fontWeight,
    lineHeight: typography[variant].lineHeight,
    transition: "color .15s ease-in",
    textTransform: "none",

    "& svg": {
      width: "20px",
      height: "20px",
    },

    "& svg path[stroke]": {
      transition: "stroke .15s ease-in",
      stroke: "currentColor",
    },

    "& svg path[fill]": {
      transition: "fill .15s ease-in",
      fill: "currentColor",
    },

    "&:hover": {
      color: palette.secondary.light,
    },

    "&:hover svg path[fill]": {
      fill: palette.secondary.light,
    },

    "&:hover svg path[stroke]": {
      stroke: palette.secondary.light,
    },

    "&:active": {
      color: palette.secondary.dark,
    },

    "&:active svg path[fill]": {
      fill: palette.secondary.dark,
    },

    "&:active svg path[stroke]": {
      stroke: palette.secondary.dark,
    },
  }),
);

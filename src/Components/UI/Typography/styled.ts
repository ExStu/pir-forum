import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import type { ITypographyProps } from "./types";

interface ISTypography extends ITypographyProps {
  color?: string;
}

export const STypography = styled(Typography)<ISTypography>(
  ({ theme: { typography, palette }, variant, color }) => ({
    color: color || palette.common.white,
    ...(variant === "h1"
      ? {
          ...typography.h1,
        }
      : {}),
    ...(variant === "h2"
      ? {
          ...typography.h2,
        }
      : {}),
    ...(variant === "h3"
      ? {
          ...typography.h3,
        }
      : {}),
    ...(variant === "h4"
      ? {
          ...typography.h4,
        }
      : {}),
    ...(variant === "body1"
      ? {
          ...typography.body1,
        }
      : {}),
    ...(variant === "body2"
      ? {
          ...typography.body2,
        }
      : {}),
    ...(variant === "body3"
      ? {
          ...typography.body3,
        }
      : {}),
    ...(variant === "text1"
      ? {
          ...typography.text1,
        }
      : {}),
    ...(variant === "text2"
      ? {
          ...typography.text2,
        }
      : {}),
    ...(variant === "extraH1"
      ? {
          ...typography.extraH1,
        }
      : {}),
    ...(variant === "extraH2"
      ? {
          ...typography.extraH2,
        }
      : {}),
    ...(variant === "extraH3"
      ? {
          ...typography.extraH3,
        }
      : {}),
    ...(variant === "extraH4"
      ? {
          ...typography.extraH4,
        }
      : {}),
    ...(variant === "extraBody1"
      ? {
          ...typography.extraBody1,
        }
      : {}),
    ...(variant === "extraBody2"
      ? {
          ...typography.extraBody2,
        }
      : {}),
    ...(variant === "extraBody3"
      ? {
          ...typography.extraBody3,
        }
      : {}),
  }),
) as typeof Typography;

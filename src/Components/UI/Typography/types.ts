import type { TypographyProps, TypographyVariant } from "@mui/material";

export type TypographyVariantsType =
  | TypographyVariant
  | "body3"
  | "text1"
  | "text2"
  | "extraH1"
  | "extraH2"
  | "extraH3"
  | "extraH4"
  | "extraBody1"
  | "extraBody2"
  | "extraBody3";

export interface ITypographyProps extends Omit<TypographyProps, "variant"> {
  variant?: TypographyVariantsType;
}

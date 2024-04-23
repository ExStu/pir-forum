import { type LinkProps as RouterLinkProps } from "react-router-dom";

import type { LinkProps } from "@mui/material/Link";

import type { TypographyVariantsType } from "@Components/UI/Typography/types";

import type { LinkTypeEnum } from "@shared/Types/link";

export interface ILink extends Omit<LinkProps, "color" | "variant">, Omit<RouterLinkProps, "to"> {
  // variant?: OverridableStringUnion<"inherit" | TypographyVariantsType> | undefined;
  variant?: TypographyVariantsType;
  customColor?: string;
  to?: RouterLinkProps["to"] | undefined;
}

export interface ITypedLink extends ILink {
  type: LinkTypeEnum;
  linkValue: string;
}

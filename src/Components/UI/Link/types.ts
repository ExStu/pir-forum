import type { LinkProps } from "@mui/material/Link";

import type { TypographyVariantsType } from "@Components/UI/Typography/types";

export interface ILink extends Omit<LinkProps, "variant"> {
  variant?: TypographyVariantsType;
  customColor?: string;
  to?: string | null;
}

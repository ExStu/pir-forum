import type { FC } from "react";

import { SButton } from "./styled";

import type { IButton } from "./types";

const Button: FC<IButton> = ({ variant = "contained", ...props }) => (
  <SButton {...props} variant={variant} disableElevation />
);

export default Button;

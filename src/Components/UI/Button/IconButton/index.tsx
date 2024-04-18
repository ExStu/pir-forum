import type { FC } from "react";

import { SIconButton } from "./styled";

import type { IIconButton } from "./types";

const IconButton: FC<IIconButton> = ({ size = "large", ...props }) => (
  <SIconButton {...props} size={size} />
);
export default IconButton;

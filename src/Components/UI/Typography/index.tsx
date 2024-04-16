import type { FC } from "react";

import { STypography } from "./styled";

import type { ITypographyProps } from "./types";

const Typography: FC<ITypographyProps> = (props) => (
  <STypography color={props.color} {...props} />
);

export default Typography;

import type { FC } from "react";
import React from "react";

import { SLink } from "./styled";

import type { ILink } from "./types";

export const Link: FC<ILink> = ({ ...props }) => (
  <SLink {...props} underline="none" />
);

import type { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

import { LinkTypeEnum } from "@shared/Types/link";

import { SLink } from "./styled";

import type { ILink, ITypedLink } from "./types";

export const Link: FC<ILink> = ({ ...props }) => <SLink {...props} underline="none" />;

export const TypedLink: FC<ITypedLink> = ({ type, linkValue, ...rest }) => (
  <Link
    {...rest}
    component={type === LinkTypeEnum.INTERNAL ? RouterLink : Link}
    to={type === LinkTypeEnum.INTERNAL ? linkValue : undefined}
    href={type === LinkTypeEnum.EXTERNAL ? linkValue : undefined}
    target={type === LinkTypeEnum.INTERNAL ? "_self" : "_blank"}
    rel={type === LinkTypeEnum.INTERNAL ? undefined : "noopener noreferrer"}
  />
);

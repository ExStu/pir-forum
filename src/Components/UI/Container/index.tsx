import type { FC } from "react";

import type { ContainerProps } from "@mui/material";

import { SContainer } from "./styled";

const Container: FC<ContainerProps> = (props) => <SContainer {...props} />;

export default Container;

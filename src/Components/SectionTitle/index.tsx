import type { FC } from "react";

import { SSectionTitle } from "@Components/SectionTitle/styled";
import type { ITypographyProps } from "@Components/UI/Typography/types";

const SectionTitle: FC<ITypographyProps> = (props) => <SSectionTitle variant="extraH2" {...props} />;

export { SectionTitle };

import type { FC } from "react";

import type { PopoverProps } from "@mui/material";

import { SPopover } from "@Components/UI/Popover/styled";

const Popover: FC<PopoverProps> = (props) => <SPopover {...props} />;

export default Popover;

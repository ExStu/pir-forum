import { paperClasses, Popover, popoverClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SPopover = styled(Popover)(() => ({
  [`& .${popoverClasses.paper}.${paperClasses.root}`]: {
    backgroundColor: "transparent",
  },
}));

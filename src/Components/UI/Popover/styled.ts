import { paperClasses, Popover, popoverClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SPopover = styled(Popover)(({ theme: { palette } }) => ({
  [`& .${popoverClasses.paper}.${paperClasses.root}`]: {
    backgroundColor: palette.background.default,
  },
}));

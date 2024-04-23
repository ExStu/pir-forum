import type { IconButtonProps } from "@mui/material";

export interface IIconButton extends IconButtonProps {
  variant: "contained" | "outlined" | "text";
  bgColor?: "primary" | "secondary";
}

import type { LoadingButtonProps } from "@mui/lab/LoadingButton";

export interface IButton extends LoadingButtonProps {
  bgColor?: "primary" | "secondary";
  bgGradient?: "fillPink" | "fillBlue" | "radial";
  bgCustom?: string;
}

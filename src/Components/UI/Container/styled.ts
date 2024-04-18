import { Container, containerClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SContainer = styled(Container)(() => ({
  [`&.${containerClasses.root}`]: {
    maxWidth: "1538px",
    padding: "0 16px",
  },
}));

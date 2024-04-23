import Snackbar, { snackbarClasses } from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";

import mq from "@theme/breakpoints";

export const SSnackbar = styled(Snackbar)(() =>
  mq({
    [`&.${snackbarClasses.root}`]: {
      width: "fit-content",
      position: "fixed",
      [`&.${snackbarClasses.anchorOriginTopRight}`]: {
        left: "unset",
        right: "40px",
        top: "32px",
      },
      [`&.${snackbarClasses.anchorOriginTopCenter}`]: {
        left: "50%",
        transform: "translateX(-50%)",
      },
      [`&.${snackbarClasses.anchorOriginTopLeft}`]: {
        right: "unset",
      },
      [`&.${snackbarClasses.anchorOriginBottomRight}`]: {
        left: "unset",
      },
      [`&.${snackbarClasses.anchorOriginBottomCenter}`]: {
        right: "unset",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "32px",
        width: "calc(100% - 32px)",
      },
      [`&.${snackbarClasses.anchorOriginBottomLeft}`]: {
        right: "unset",
      },
    },
  }),
);

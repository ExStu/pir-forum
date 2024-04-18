import LoadingButton, { loadingButtonClasses } from "@mui/lab/LoadingButton";
import { buttonClasses } from "@mui/material/Button";
import { keyframes, styled } from "@mui/material/styles";

import type { IButton } from "./types";

const gradientAnimation = keyframes`
    0% {
        background-position: 0 0;
        background-size: 100% 100%;
    }
    
    15% {
        background-position: 50% 50%;
        background-size: 200% 100%;
    }

    50% {
        background-position: 100% 50%;
        background-size: 300% 100%;
    }
    
    //75% {
    //    background-position: 50% 50%;
    //    background-size: 200% 100%;
    //}

    100% {
        background-position: 0 0;
        background-size: 100% 100%;
    }
`;

export const SButton = styled(LoadingButton)<IButton>(
  ({
    theme: { palette, typography },
    size = "large",
    fullWidth,
    loading,
    bgColor = "primary",
    bgCustom,
    bgGradient,
  }) => ({
    padding: "40px 76px",
    fontSize: "32px",
    height: "48px",
    fontWeight: 700,
    lineHeight: "24px",
    borderRadius: "20px",
    width: fullWidth ? "100%" : "fit-content",
    transition:
      "color .12s ease-in, background .12s ease-in, transform .12s ease-in, background-position .12s ease-in",
    color: palette.common.white,
    textTransform: "none",
    fontFamily: "Roboto",

    [`&.${buttonClasses.contained}`]: {
      ...(bgGradient
        ? {
            background: palette.gradients[bgGradient],
            // backgroundSize: "200% 100%",
            backgroundSize: "100% 100%",
            // backgroundPosition: "0 0",
          }
        : {
            background: palette[bgColor].main,
          }),

      "&:hover, &:focus-visible": {
        ...(loading && {
          background: palette.grey[50],
        }),
        ...(bgGradient &&
          !loading && {
            animation: `3s linear 0s infinite ${gradientAnimation}`,
          }),
        ...(bgColor &&
          !loading &&
          !bgGradient && {
            background: palette[bgColor].dark,
          }),
      },
      // "&:active": {
      //   transform: "scale(0.95)",
      // },
    },

    [`&.${buttonClasses.outlined}`]: {
      border: "none",
      background: palette.uncategorized.backgroundTransparent,
      backdropFilter: "blur(2px)",
      transition: "background .12s ease-in",
      "&:hover, &:focus-visible": {
        background: palette.gradients.fillPink,
        animation: `3s linear 0s infinite ${gradientAnimation}`,
      },
    },

    [`&.${buttonClasses.text}`]: {
      height: "auto",
      padding: 0,
      fontSize: typography.body2.fontSize,
      lineHeight: typography.body2.lineHeight,
      fontWeight: typography.body2.fontWeight,
      backgroundColor: "transparent",
      "&::before": {
        content: "''",
        position: "absolute",
        bottom: "-6px",
        left: 0,
        width: "100%",
        height: "1px",
        background: palette.secondary.main,
        transform: "scaleX(0)",
        transition: "all .2s ease",
      },
      "&:hover, &:focus-visible": {
        color: palette.secondary.main,
      },
      "&:hover::before": {
        transform: "scaleX(1)",
      },
      "&:active": {
        color: palette.secondary.dark,
      },
      "&:active::before": {
        background: palette.secondary.dark,
      },
    },

    [`&.${buttonClasses.disabled}`]: {
      backgroundColor: palette.grey[50],
      border: "none",
      color: palette.text.disabled,
    },

    [`.${loadingButtonClasses.loadingIndicator}`]: {
      position: "static",
      marginRight: ["4px", "8px"],
    },

    [`.${buttonClasses.startIcon}`]: {
      marginRight: ["4px", "8px"],
      marginLeft: "0px",
    },

    [`.${buttonClasses.endIcon}`]: {
      marginRight: "0px",
      marginLeft: ["4px", "8px"],
    },

    ...(size === "medium" && {
      padding: ["6px 16px", "12px 24px"],
      height: ["32px", "40px"],
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "20px",
      borderRadius: "12px",
    }),
    ...(size === "small" && {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "16px",
      borderRadius: "12px",
    }),
  }),
);

interface IButtonBorder {
  size?: "large" | "medium" | "small";
}

export const SButtonBorder = styled("div")<IButtonBorder>(
  ({ size = "large", theme: { palette } }) => ({
    display: "flex",
    alignSelf: "flex-start",
    height: "fit-content",
    padding: "1px",
    borderRadius: "20px",
    background: palette.gradients.borderBlue,
    backgroundSize: "100% 100%",
    transition: "transform .12s ease-in",
    ...(size === "medium" && {
      borderRadius: "12px",
    }),
    ...(size === "small" && {
      borderRadius: "12px",
    }),

    "&:hover": {
      animation: `3s linear 0s infinite ${gradientAnimation}`,
    },

    "&:active": {
      transform: "scale(0.95)",
    },
  }),
);

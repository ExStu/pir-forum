import { forwardRef } from "react";

import { useMediaQuery, useTheme } from "@mui/material";

import ArrowLeft from "@shared/Icons/arrowLeft";
import ArrowRight from "@shared/Icons/arrowRight";

import { SCarouselBtn } from "./styled";

import type { ICarouselBtn } from "./types";

export const CarouselBtn = forwardRef<HTMLButtonElement, ICarouselBtn>(
  ({ variant, modalCustom, ...props }, ref) => {
    const { breakpoints } = useTheme();
    const isTablet = useMediaQuery(breakpoints.up("md"));
    const isMobile = useMediaQuery(breakpoints.down("sm"));

    return (
      <SCarouselBtn
        className="carousel-btn"
        disabled={props.disabled}
        ref={ref}
        {...props}
        sx={
          variant === "next"
            ? {
                right: modalCustom ? "27%" : isMobile ? 0 : isTablet ? "0%" : "34%",
              }
            : { right: modalCustom ? "27%" : isMobile ? 0 : isTablet ? "5%" : "34%" }
        }
      >
        {variant === "next" ? <ArrowRight /> : <ArrowLeft />}
      </SCarouselBtn>
    );
  },
);

CarouselBtn.displayName = "CarouselBtn";

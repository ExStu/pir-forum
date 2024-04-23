import { Checkbox } from "@mui/material";
import { styled } from "@mui/material/styles";

import mq from "@theme/breakpoints";

import checkIcon from "@assets/icons/check.svg?url";

import type { ICheckbox } from "./types";

export const SCheckbox = styled(Checkbox)(() =>
  mq({
    padding: 0,
    width: ["20px", "24px"],
    height: ["20px", "24px"],
  }),
);

export const SCheckboxIcon = styled("span")<ICheckbox>(({ error, theme: { palette } }) =>
  mq({
    boxSizing: "border-box",
    borderRadius: 4,
    width: ["20px", "24px"],
    height: ["20px", "24px"],
    border: error ? `1px solid ${palette.error.main}` : `1px solid ${palette.grey[100]}`,
    // backgroundColor: palette.common.white,
    backgroundColor: "transparent",
    transition: "border-color .1s ease-in",
    "input:hover ~ &": {
      borderColor: !error ? palette.primary.main : "",
    },
    "input:disabled ~ &": {
      border: `1px solid ${palette.grey[50]}`,
    },
  }),
);

export const SCheckedCheckboxIcon = styled(SCheckboxIcon)<ICheckbox>(({ error, theme: { palette } }) =>
  mq({
    boxSizing: "border-box",
    borderRadius: 4,
    width: ["20px", "24px"],
    height: ["20px", "24px"],
    border: error ? `1px solid ${palette.error.main}` : `1px solid ${palette.primary.main}`,
    backgroundColor: error ? palette.error.main : palette.primary.main,
    backgroundImage: `url("${checkIcon}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: ["auto", "12px auto"],
    transition: "background-color .1s ease-in",
    "input:hover ~ &": {
      border: !error ? `1px solid ${palette.primary.dark}` : `1px solid ${palette.error.main}`,
      backgroundColor: !error ? palette.primary.dark : "",
    },
    "input:disabled ~ &": {
      border: "1px solid transparent",
      backgroundColor: palette.grey[50],
    },
  }),
);

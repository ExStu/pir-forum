import { FormControlLabel, formControlLabelClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SFormControlLabel = styled(FormControlLabel)(({ theme: { palette, typography } }) => ({
  [`& .${formControlLabelClasses.label}`]: {
    fontSize: typography.body3.fontSize,
    lineHeight: typography.body3.lineHeight,
    fontWeight: typography.body3.fontWeight,
  },

  [`&.${formControlLabelClasses.root}`]: {
    marginLeft: 0,
    marginRight: 0,
    gap: "8px",
    alignItems: "center",
    color: palette.common.white,
  },
}));

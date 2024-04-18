import type { FC } from "react";

import IconButton from "@Components/UI/Button/IconButton";
import Typography from "@Components/UI/Typography";

import ArrowRightUp from "@shared/Icons/arrowRightUp";

import { SThemeCard } from "./styled";

import type { IThemeCardItem } from "./types";

const ThemeCard: FC<IThemeCardItem> = ({ title, text }) => {
  const temp = 1;

  return (
    <SThemeCard>
      <IconButton variant="outlined" size="medium">
        <ArrowRightUp />
      </IconButton>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1" color="text.secondary">
        {text}
      </Typography>
    </SThemeCard>
  );
};
export default ThemeCard;

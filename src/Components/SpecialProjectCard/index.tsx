import type { FC } from "react";

import Typography from "@Components/UI/Typography";

import { SSpecialProjectCard } from "./styled";

import type { ISpecialProjectCardItem } from "./types";

const SpecialProjectCard: FC<ISpecialProjectCardItem> = ({ title, text }) => {
  const temp = 1;

  return (
    <SSpecialProjectCard>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1" color="text.secondary">
        {text}
      </Typography>
    </SSpecialProjectCard>
  );
};

export default SpecialProjectCard;

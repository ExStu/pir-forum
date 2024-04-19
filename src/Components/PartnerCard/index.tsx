import type { FC } from "react";

import Typography from "@Components/UI/Typography";

import { SPartnerCard } from "./styled";

import type { IPartnerCardItem } from "./types";

const PartnerCard: FC<IPartnerCardItem> = ({ title, image }) => {
  const temp = 1;

  return (
    <SPartnerCard>
      <Typography variant="h4" textAlign="center">
        {title}
      </Typography>
      <img src={image} alt={`Логотип партнёра - ${title}`} />
    </SPartnerCard>
  );
};

export default PartnerCard;

import type { FC } from "react";

import Typography from "@Components/UI/Typography";

import { STitlePartnerCard } from "./styled";

import type { ITitlePartnerCardItem } from "./types";

const TitlePartnerCard: FC<ITitlePartnerCardItem> = ({ title, image }) => {
  const temp = 1;

  return (
    <STitlePartnerCard>
      <Typography variant="h4" textAlign="center">
        {title}
      </Typography>
      <img src={image} alt={`Логотип партнёра - ${title}`} />
    </STitlePartnerCard>
  );
};

export default TitlePartnerCard;

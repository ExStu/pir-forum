import type { FC } from "react";

import { TypedLink } from "@Components/UI/Link";
import Typography from "@Components/UI/Typography";

import ArrowRightSmall from "@shared/Icons/arrowRightSmall";

import { SNewsCard, SNewsCardImg, SNewsCardTextWrap } from "./styled";

import type { INewsCard } from "./types";

const NewsCard: FC<INewsCard> = ({ image, link, title, description }) => {
  const temp = 1;

  return (
    <SNewsCard>
      <SNewsCardImg src={image} alt={title} />
      <SNewsCardTextWrap>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </SNewsCardTextWrap>
      <TypedLink type={link.type} linkValue={link.value}>
        Подробнее
        <ArrowRightSmall />
      </TypedLink>
    </SNewsCard>
  );
};

export default NewsCard;

import type { FC } from "react";

import Typography from "@Components/UI/Typography";

import { ArrowRightUpSecondary } from "@shared/Icons/arrowRightUpSecondary";

import {
  SGreetingCard,
  SGreetingCardActionBtn,
  SGreetingCardActionBtnWrap,
  SGreetingCardActionWrap,
  SGreetingCardImg,
} from "./styled";

import type { IGreetingCardItem } from "./types";

const cardVariants = {
  expanded: {
    width: "48%",
  },
  collapsed: {
    width: "24%",
  },
};

const GreetingCard: FC<IGreetingCardItem> = ({
  firstName,
  lastName,
  post,
  image,
  expanded,
  handleClick,
}) => (
  <SGreetingCard
    expanded={expanded}
    onClick={handleClick}
    variants={cardVariants}
    initial={expanded ? "expanded" : "collapsed"}
    animate={expanded ? "expanded" : "collapsed"}
    transition={{ duration: 0.5 }}
  >
    {expanded && (
      <>
        <div>
          <Typography variant="h2" color="secondary.main" sx={{ lineHeight: "30px" }}>
            {firstName}
          </Typography>
          <Typography variant="h2" sx={{ lineHeight: "30px" }}>
            {lastName}
            <Typography component="span" variant="h2" color="secondary" sx={{ lineHeight: 0 }}>
              .
            </Typography>
          </Typography>
        </div>
        <Typography variant="h4">{post}</Typography>
        <SGreetingCardActionWrap />
        <SGreetingCardActionBtnWrap>
          <SGreetingCardActionBtn variant="contained" bgColor="secondary" size="medium">
            <ArrowRightUpSecondary />
          </SGreetingCardActionBtn>
        </SGreetingCardActionBtnWrap>
      </>
    )}
    <SGreetingCardImg src={image} alt={`${firstName} ${lastName}`} />
  </SGreetingCard>
);

export default GreetingCard;

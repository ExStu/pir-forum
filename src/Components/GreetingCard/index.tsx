import type { FC } from "react";

import type { IGreetingCardItem } from "./types";

const GreetingCard: FC<IGreetingCardItem> = ({
  firstName,
  lastName,
  post,
  image,
}) => {
  const temp = 1;

  return (
    <div>
      <div>123</div>
    </div>
  );
};

export default GreetingCard;

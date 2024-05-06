import type { FC } from "react";
import { useState } from "react";

import GreetingCard from "@Components/GreetingCard";
import { SectionTitle } from "@Components/SectionTitle";
import Container from "@Components/UI/Container";

import greetingsData from "@data/home/greetings";

import { SGreetings, SGreetingsList } from "./styled";

const Greetings: FC = () => {
  const [expanded, setExpanded] = useState<number>(0);

  const handleOnClick = (index: number) => {
    setExpanded(index);
  };

  return (
    <SGreetings>
      <Container>
        <SectionTitle>ПРИВЕТСТВИЯ</SectionTitle>
        <SGreetingsList>
          {greetingsData.map((item, index) => (
            <GreetingCard
              key={item.firstName}
              firstName={item.firstName}
              lastName={item.lastName}
              post={item.post}
              image={item.image}
              expanded={expanded === index}
              handleClick={() => handleOnClick(index)}
            />
          ))}
        </SGreetingsList>
      </Container>
    </SGreetings>
  );
};

export default Greetings;

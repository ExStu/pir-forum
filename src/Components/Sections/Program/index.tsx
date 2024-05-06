import type { FC } from "react";

import { SectionTitle } from "@Components/SectionTitle";
import SpecialProjectCard from "@Components/SpecialProjectCard";
import ThemeCard from "@Components/ThemeCard";
import Button from "@Components/UI/Button";
import { SButtonBorder } from "@Components/UI/Button/styled";
import Container from "@Components/UI/Container";
import Typography from "@Components/UI/Typography";

import specialProjectsData from "@data/home/program/specialProjects";
import themesData from "@data/home/program/themes";

import {
  SProgram,
  SProgramCardsBlock,
  SProgramCardsWrap,
  SProgramSubtitle,
  SProgramTitle,
} from "./styled";

const Program: FC = () => {
  const temp = 1;

  return (
    <SProgram>
      <Container>
        <SProgramTitle>
          <SectionTitle>ДЕЛОВАЯ ПРОГРАММА</SectionTitle>
          <SButtonBorder size="medium">
            <Button bgColor="secondary" size="medium">
              Смотреть программу
            </Button>
          </SButtonBorder>
        </SProgramTitle>
        <SProgramSubtitle>
          <Typography variant="h3">ГЛАВНАЯ ТЕМА</Typography>
          <Typography variant="extraH1" component="h3">
            «
            <Typography variant="extraH1" component="span" color="secondary.main">
              Инвестиции&nbsp;
            </Typography>
            в туризм-2030. Люди, проекты,&nbsp;
            <Typography variant="extraH1" component="span" color="uncategorized.oceanic">
              результаты
            </Typography>
            »
          </Typography>
        </SProgramSubtitle>
        <SProgramCardsBlock>
          <Typography variant="h2">Тематические треки</Typography>
          <SProgramCardsWrap>
            {themesData.map((item) => (
              <ThemeCard key={item.title} title={item.title} text={item.text} />
            ))}
          </SProgramCardsWrap>
        </SProgramCardsBlock>
        <SProgramCardsBlock>
          <Typography variant="h2">Спецпроекты 2023</Typography>
          <SProgramCardsWrap>
            {specialProjectsData.map((item) => (
              <SpecialProjectCard key={item.title} title={item.title} text={item.text} />
            ))}
          </SProgramCardsWrap>
        </SProgramCardsBlock>
      </Container>
    </SProgram>
  );
};

export default Program;

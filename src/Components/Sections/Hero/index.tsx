import type { FC } from "react";

import heroImg from "@assets/images/hero-graph.svg";
import pirExpoLogo from "@assets/logos/pir-expo.svg";

import Button from "@Components/UI/Button";
import { SButtonBorder } from "@Components/UI/Button/styled";
import Container from "@Components/UI/Container";
import Typography from "@Components/UI/Typography";

import {
  SHero,
  SHeroBottom,
  SHeroBottomStatsWrap,
  SHeroBottomTitle,
  SHeroTop,
  SHeroTopContent,
  SHeroTopContentDate,
  SHeroTopContentDateWrap,
  SHeroTopContentTitles,
  SHeroTopContentTitlesBorder,
} from "./styled";

const Hero: FC = () => {
  const temp = 1;

  return (
    <Container>
      <SHero>
        <SHeroTop>
          <img src={heroImg} alt="Графическое изображение Форума регионов России" />
          <SHeroTopContent>
            <SHeroTopContentDateWrap>
              <img src={pirExpoLogo} alt="Логотип ПИР Экспо" />
              <SHeroTopContentDate>
                <Typography variant="h3">23–25 ОКТЯБРЯ 2024</Typography>
                <Typography variant="h4">ХАЯТТ РИДЖЕНСИ, МОСКВА</Typography>
              </SHeroTopContentDate>
            </SHeroTopContentDateWrap>
            <SHeroTopContentTitles>
              <Typography
                variant="extraH1"
                component="h2"
                sx={{ wordSpacing: "100vw" }}
              >
                ФОРУМ РЕГИОНОВ РОССИИ
              </Typography>
              <SHeroTopContentTitlesBorder />
              <Typography variant="extraH1">
                РАЗВИТИЕ ТУРИСТCКОЙ ИНФРАСТРУКТУРЫ
              </Typography>
            </SHeroTopContentTitles>
            <SButtonBorder>
              <Button bgGradient="fillPink">Смотреть всё</Button>
            </SButtonBorder>
          </SHeroTopContent>
        </SHeroTop>
        <SHeroBottom>
          <SHeroBottomTitle variant="extraH1" component="h2">
            Все про
            <Typography variant="extraH1" component="span" color="secondary.light">
              &nbsp;инвестиции
            </Typography>
            , отели и туризм!
          </SHeroBottomTitle>
          <SHeroBottomStatsWrap>123</SHeroBottomStatsWrap>
        </SHeroBottom>
      </SHero>
    </Container>
  );
};

export default Hero;

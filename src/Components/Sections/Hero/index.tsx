import type { FC } from "react";

import { useTheme } from "@mui/material";

import Button from "@Components/UI/Button";
import { SButtonBorder } from "@Components/UI/Button/styled";
import Container from "@Components/UI/Container";
import { Link } from "@Components/UI/Link";
import Typography from "@Components/UI/Typography";

import { ExternalLinksEnum } from "@constants/links";

import heroImg from "@assets/images/hero-graph.svg";
import pirExpoLogo from "@assets/logos/pir-expo.svg";

import {
  SHero,
  SHeroBottom,
  SHeroBottomStatsItem,
  SHeroBottomStatsItemBottom,
  SHeroBottomStatsItemTop,
  SHeroBottomStatsWrap,
  SHeroBottomTitle,
  SHeroImg,
  SHeroTop,
  SHeroTopContent,
  SHeroTopContentDate,
  SHeroTopContentDateWrap,
  SHeroTopContentTitles,
  SHeroTopContentTitlesBorder,
} from "./styled";

const Hero: FC = () => {
  const { palette } = useTheme();

  return (
    <Container>
      <SHero>
        <SHeroTop>
          <SHeroImg src={heroImg} alt="Графическое изображение Форума регионов России" />
          <SHeroTopContent>
            <SHeroTopContentDateWrap>
              <Link href={ExternalLinksEnum.PIR_EXPO} target="_blank" rel="noopener noreferrer">
                <img src={pirExpoLogo} alt="Логотип ПИР Экспо" />
              </Link>
              <SHeroTopContentDate>
                <Typography variant="h3">23–25 ОКТЯБРЯ 2024</Typography>
                <Typography variant="h4">ХАЯТТ РИДЖЕНСИ, МОСКВА</Typography>
              </SHeroTopContentDate>
            </SHeroTopContentDateWrap>
            <SHeroTopContentTitles>
              <Typography variant="extraH1" component="h2" sx={{ wordSpacing: "100vw" }}>
                ФОРУМ РЕГИОНОВ РОССИИ
              </Typography>
              <SHeroTopContentTitlesBorder />
              <Typography variant="extraH1">РАЗВИТИЕ ТУРИСТCКОЙ ИНФРАСТРУКТУРЫ</Typography>
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
          <SHeroBottomStatsWrap>
            <SHeroBottomStatsItem>
              <SHeroBottomStatsItemTop>
                <Typography variant="text1">Текст</Typography>
              </SHeroBottomStatsItemTop>
              <SHeroBottomStatsItemBottom>
                <Typography variant="extraH2" color={palette.uncategorized.oceanic}>
                  630
                </Typography>
                <Typography variant="text1">Текст</Typography>
              </SHeroBottomStatsItemBottom>
            </SHeroBottomStatsItem>
            <SHeroBottomStatsItem>
              <SHeroBottomStatsItemTop>
                <Typography variant="text1">Текст</Typography>
              </SHeroBottomStatsItemTop>
              <SHeroBottomStatsItemBottom>
                <Typography variant="extraH2">40%</Typography>
                <Typography variant="text1">Текст</Typography>
              </SHeroBottomStatsItemBottom>
            </SHeroBottomStatsItem>
            <SHeroBottomStatsItem>
              <SHeroBottomStatsItemTop>
                <Typography variant="text1">Текст</Typography>
              </SHeroBottomStatsItemTop>
              <SHeroBottomStatsItemBottom>
                <Typography variant="extraH2">48 700</Typography>
                <Typography variant="text1">Текст</Typography>
              </SHeroBottomStatsItemBottom>
            </SHeroBottomStatsItem>
          </SHeroBottomStatsWrap>
        </SHeroBottom>
      </SHero>
    </Container>
  );
};

export default Hero;

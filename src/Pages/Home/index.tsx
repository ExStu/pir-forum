import type { FC } from "react";

import { useTheme } from "@mui/material";

import Hero from "@Components/Sections/Hero";
import News from "@Components/Sections/News";
import Partners from "@Components/Sections/Partners";
import Program from "@Components/Sections/Program";
import Subscribe from "@Components/Sections/Subscribe";

import Header from "@Layout/Header";

import { SHomeHeroEdgeBg } from "@Pages/Home/styled";

import headerData from "@data/home/header";

const Home: FC = () => {
  const { palette } = useTheme();
  return (
    <>
      <SHomeHeroEdgeBg>
        <Header items={headerData} />
        <Hero />
      </SHomeHeroEdgeBg>
      <Program />
      <Partners />
      <News />
      <Subscribe />
    </>
  );
};

export default Home;

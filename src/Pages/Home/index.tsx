import type { FC } from "react";

import { useTheme } from "@mui/material";

import Hero from "@Components/Sections/Hero";
import Program from "@Components/Sections/Program";

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
    </>
  );
};

export default Home;

import type { FC } from "react";

import { useTheme } from "@mui/material";

import Hero from "@Components/Sections/Hero";

import Header from "@Layout/Header";

import headerData from "@data/home/header";

const Home: FC = () => {
  const { palette } = useTheme();
  return (
    <>
      <Header items={headerData} />
      <Hero />
    </>
  );
};

export default Home;

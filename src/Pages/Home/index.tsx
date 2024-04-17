import type { FC } from "react";

import { useTheme } from "@mui/material";

import Header from "@Layout/Header";

import headerData from "@data/home/header";

const Home: FC = () => {
  const { palette } = useTheme();
  return <Header items={headerData} />;
};

export default Home;

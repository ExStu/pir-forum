import { styled } from "@mui/material/styles";

import heroEdgeBg from "@assets/images/hero-edgeBg.svg";

export const SHomeHeroEdgeBg = styled("div")(() => ({
  backgroundImage: `url(${heroEdgeBg})`,
  backgroundSize: "fill",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right -85px top",
}));

import type { FC } from "react";

import { Box, useTheme } from "@mui/material";

import Typography from "@Components/UI/Typography";

const Home: FC = () => {
  const { palette } = useTheme();
  return (
    <div>
      <Typography variant="h1">Hello Druk</Typography>
      <Typography variant="extraH4">Hello Roboto</Typography>
      <Box sx={{ display: "flex", gap: "32px" }}>
        <Box
          sx={{
            width: 200,
            height: 200,
            background: palette.gradients.fillBlue,
          }}
        />
        <Box
          sx={{
            width: 200,
            height: 200,
            background: palette.gradients.fillPink,
          }}
        />
        <Box
          sx={{
            width: 200,
            height: 200,
            background: palette.gradients.radial,
          }}
        />

        <Box
          sx={{
            width: 200,
            height: 200,
            background: palette.gradients.borderPurple,
            padding: "3px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: palette.background.default,
            }}
          />
        </Box>

        <Box
          sx={{
            width: 200,
            height: 200,
            background: palette.gradients.borderPink,
            padding: "3px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: palette.background.default,
            }}
          />
        </Box>

        <Box
          sx={{
            width: 200,
            height: 200,
            background: palette.gradients.borderBlue,
            padding: "3px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: palette.background.default,
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Home;

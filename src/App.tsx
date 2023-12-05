import { Box, Container, Paper, useMediaQuery, useTheme } from "@mui/material";
import ColorModeProvider from "./contexts/ColorMode";
import NowReading from "./components/StoryLayout/NowReading";
import StoryInfo from "./components/StoryLayout/StoryInfo";
import StoryProvider from "./contexts/StoryContext";
import { Fragment } from "react";
import Story from "./utility/Story";
import ModeButton from "./components/ModeButton";

function App() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ColorModeProvider>
      <StoryProvider>
        <Fragment>
          <Box width="100%" height="100vh" position="relative" top={0}>
            <Container sx={{ p: isDesktop ? 4 : 0 }}>
              <Box component="main" mt={isDesktop ? 4 : 0}>
                <Paper
                  sx={{
                    px: 3,
                    py: isDesktop ? 3 : 8,
                    boxSizing: "border-box",
                    mb: 10,
                  }}
                >
                  <ModeButton />
                  <StoryInfo />
                  <Story />
                </Paper>
              </Box>
            </Container>
          </Box>
          <NowReading />
        </Fragment>
      </StoryProvider>
    </ColorModeProvider>
  );
}

export default App;

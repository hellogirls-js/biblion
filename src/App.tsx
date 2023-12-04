import { Box, Container, Link, Paper } from "@mui/material";
import Header from "./components/StoryLayout/Header";
import ColorModeProvider from "./contexts/ColorMode";
import NowReading from "./components/StoryLayout/NowReading";
import StoryInfo from "./components/StoryLayout/StoryInfo";
import StoryProvider from "./contexts/StoryContext";
import { Fragment } from "react";
import Story from "./utility/Story";

function App() {
  return (
    <ColorModeProvider>
      <StoryProvider>
        <Fragment>
          <Box width="100%" height="100vh" position="relative" top={0}>
            <Header />
            <Container>
              <Box component="main" mt={12}>
                <Paper sx={{ px: 3, py: 1, boxSizing: "border-box", mb: 10 }}>
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

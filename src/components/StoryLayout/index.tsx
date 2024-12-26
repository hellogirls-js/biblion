import { Box, Container, Paper, useMediaQuery, useTheme } from "@mui/material";
import { Fragment } from "react";
import StoryInfo from "./StoryInfo";
import Story from "../../utility/Story";
import NowReading from "./NowReading";
import { StoryType } from "../../types/main";

export default function StoryLayout({
  storyInfo,
  chapter = 1,
}: {
  storyInfo: StoryType;
  chapter?: number;
}) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Fragment>
      <Box width="100%" height="100vh" position="relative" top={0}>
        <Container sx={{ p: isDesktop ? 4 : 0 }}>
          <Box component="main" mt={isDesktop ? 4 : 0}>
            <Paper
              sx={{
                px: isDesktop ? 3 : 1,
                py: isDesktop ? 3 : 1,
                boxSizing: "border-box",
                mb: 10,
              }}
            >
              <StoryInfo {...{ storyInfo }} />
              <Story {...{ storyInfo, chapter }} />
            </Paper>
          </Box>
        </Container>
      </Box>
      <NowReading {...{ storyInfo, chapter }} />
    </Fragment>
  );
}

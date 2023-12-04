import { AutoStories, FastForward, FastRewind } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Link,
  Paper,
  Slide,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { motion, useScroll } from "framer-motion";
import { ReactElement, useContext } from "react";
import { DARK_PALETTE, LIGHT_PALETTE } from "../../utility/colors";
import { StoryContext } from "../../contexts/StoryContext";

function ShowOnScroll(props: { children: ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide in={trigger} appear timeout={1000} direction="up">
      {children}
    </Slide>
  );
}

function StoryBuffer() {
  const { scrollYProgress } = useScroll();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Stack
      direction="row"
      height="100%"
      width="100%"
      alignItems="center"
      gap={1}
    >
      <Tooltip title="Previous chapter">
        <IconButton color="primary">
          <FastRewind fontSize={isDesktop ? "large" : "small"} />
        </IconButton>
      </Tooltip>
      <Box
        width="100%"
        height="100%"
        flexGrow={1}
        borderRadius={50}
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? LIGHT_PALETTE.surface0
              : DARK_PALETTE.surface0,
        }}
      >
        <Box
          height="100%"
          component={motion.div}
          sx={(theme) => ({ backgroundColor: theme.palette.primary.main })}
          borderRadius={50}
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        />
      </Box>
      <Tooltip title="Next chapter">
        <IconButton color="primary">
          <FastForward fontSize={isDesktop ? "large" : "small"} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default function NowReading() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const storyInfo = useContext(StoryContext);

  return (
    <ShowOnScroll>
      <Box width="100vw" sx={{ position: "fixed", bottom: 0 }}>
        <Box width={"95%"} margin="auto">
          <Paper
            elevation={0}
            sx={{
              px: isDesktop ? 10 : 2,
              py: 3,
              boxSizing: "border-box",
              borderRadius: `${theme.shape.borderRadius * 3}px ${
                theme.shape.borderRadius * 3
              }px 0 0`,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Stack direction="row" gap={isDesktop ? 3 : 1} width="100%">
              <Box
                borderRadius={theme.shape.borderRadius}
                flexBasis="60px"
                width="60px"
                height="60px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ backgroundColor: theme.palette.background.default }}
              >
                <AutoStories
                  fontSize="medium"
                  sx={{ color: theme.palette.primary.light }}
                />
              </Box>
              <Stack
                direction={isDesktop ? "row" : "column"}
                alignItems="center"
                width="100%"
                gap={2}
              >
                {/* now playing layout */}
                <Stack direction="row" gap={1} flexBasis="17%">
                  {/* track info */}
                  <Stack
                    direction={isDesktop ? "column" : "row"}
                    gap={isDesktop ? 0.5 : 2}
                    alignItems={isDesktop ? "flex-start" : "center"}
                  >
                    <Typography
                      fontWeight={700}
                      textOverflow="ellipsis"
                      overflow="hidden"
                      whiteSpace="nowrap"
                    >
                      {storyInfo.chapters[0]}
                    </Typography>
                    <Stack direction="row" gap={1} alignItems="center">
                      <Typography
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        fontSize={isDesktop ? "0.9rem" : "0.8rem"}
                      >
                        <Link href={storyInfo.authorProfileLink}>
                          {storyInfo.author}
                        </Link>
                      </Typography>{" "}
                      —
                      <Typography
                        variant="subtitle1"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        fontSize={isDesktop ? "0.9rem" : "0.8rem"}
                      >
                        {storyInfo.title}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Box height={5} width="100%" flexGrow={isDesktop ? 1 : 0}>
                  <StoryBuffer />
                </Box>
              </Stack>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </ShowOnScroll>
  );
}

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
import { ReactElement } from "react";
import { DARK_PALETTE, LIGHT_PALETTE, toHSLObject } from "../../utility/colors";
import { StoryType } from "../../types/main";
import { Link as NavLink } from "react-router-dom";

function ShowOnScroll(props: { children: ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide in={trigger} appear timeout={1000} direction="up">
      {children}
    </Slide>
  );
}

function StoryBuffer({
  storyInfo,
  chapter,
}: {
  storyInfo: StoryType;
  chapter: number;
}) {
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
        <IconButton
          component={NavLink}
          color="primary"
          disabled={chapter <= 1}
          to={`?chapter=${chapter - 1}`}
        >
          <FastRewind fontSize={isDesktop ? "large" : "medium"} />
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
              ? LIGHT_PALETTE.mantle
              : DARK_PALETTE.mantle,
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
        <IconButton
          color="primary"
          disabled={chapter >= storyInfo.chapters.length}
          component={NavLink}
          to={`?chapter=${chapter + 1}`}
        >
          <FastForward fontSize={isDesktop ? "large" : "medium"} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default function NowReading({
  storyInfo,
  chapter = 1,
}: {
  storyInfo: StoryType;
  chapter?: number;
}) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const baseHSLObj = toHSLObject(theme.palette.background.paper);
  const primaryHSLObj = toHSLObject(theme.palette.primary.main);

  console.log(storyInfo, chapter);

  return (
    <ShowOnScroll>
      <Box width="100vw" sx={{ position: "fixed", bottom: 0, left: 0 }}>
        <Box width={"95%"} margin="auto">
          <Paper
            elevation={4}
            sx={{
              px: isDesktop ? 10 : 2,
              py: 3,
              boxSizing: "border-box",
              borderRadius: `${theme.shape.borderRadius * 3}px ${
                theme.shape.borderRadius * 3
              }px 0 0`,
              backgroundColor: `hsl(${
                primaryHSLObj.hue - (theme.palette.mode === "dark" ? 5 : 0)
              }, ${
                primaryHSLObj.saturation -
                (theme.palette.mode === "dark" ? 42 : 0)
              }%, ${
                baseHSLObj.lightness - (theme.palette.mode === "light" ? 5 : -7)
              }%)`,
              color: `hsl(${primaryHSLObj.hue}, ${
                primaryHSLObj.saturation -
                (theme.palette.mode === "light" ? 65 : 10)
              }%, ${
                primaryHSLObj.lightness -
                (theme.palette.mode === "light" ? 25 : -5)
              }%)`,
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
                      {storyInfo.chapters[chapter - 1]?.title ??
                        `Chapter ${chapter}`}
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
                  <StoryBuffer {...{ storyInfo, chapter }} />
                </Box>
              </Stack>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </ShowOnScroll>
  );
}

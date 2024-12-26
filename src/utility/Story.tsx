import { Fragment } from "react";
import { Typography, useTheme } from "@mui/material";
import { StoryType } from "../types/main";

export default function Story({
  storyInfo,
  chapter = 1,
}: {
  storyInfo: StoryType;
  chapter?: number;
}) {
  const theme = useTheme();

  return (
    <Fragment>
      <Typography
        mt={10}
        variant="h3"
        component="h3"
        textAlign="center"
        fontSize="1.8rem"
        color={theme.palette.primary.main}
      >
        Chapter {chapter}
        {storyInfo.chapters[chapter - 1].title
          ? `: ${storyInfo.chapters[chapter - 1].title}`
          : ""}
      </Typography>
      {storyInfo.chapters[chapter - 1].content}
    </Fragment>
  );
}

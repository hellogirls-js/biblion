import { Box, Typography } from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";
import { stories } from "../utility/Stories";
import StoryLayout from "../components/StoryLayout";
import { useEffect, useState } from "react";

export default function StoryPage() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [chapterNum, setChapterNum] = useState(1);
  const storyTitle = params.storyTitle;
  const story = stories.find(
    (s) =>
      s.title.toLowerCase() === storyTitle?.toLowerCase().replaceAll("-", " "),
  );

  const chapterQuery = Number(searchParams.get("chapter")) ?? 1;

  useEffect(() => {
    if (
      story?.chapters?.length &&
      chapterQuery > 0 &&
      chapterQuery <= story?.chapters?.length
    ) {
      setChapterNum(chapterQuery);
    }
  }, [searchParams]);

  if (!story)
    return (
      <Box>
        <Typography>Story not found</Typography>
      </Box>
    );

  return (
    <Box>
      <StoryLayout storyInfo={story} chapter={chapterNum} />
    </Box>
  );
}

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { StoryType } from "../types/main";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Story({
  storyInfo,
  chapter = 1,
}: {
  storyInfo: StoryType;
  chapter?: number;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const [openChapterMenu, setOpenChapterMenu] = useState<null | HTMLElement>(
    null,
  );
  const isMenuOpen = Boolean(openChapterMenu);

  return (
    <Box px={isMobile ? 2 : undefined}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        mt={10}
      >
        <Typography
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
        {storyInfo.chapters.length > 1 && (
          <IconButton
            id="chapter-menu-dropdown"
            aria-label="chapters dropdown"
            color="primary"
            onClick={(event: MouseEvent<HTMLButtonElement>) =>
              setOpenChapterMenu(event.currentTarget)
            }
          >
            {isMenuOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        )}
      </Stack>
      <Menu
        anchorEl={openChapterMenu}
        open={isMenuOpen}
        onClose={() => setOpenChapterMenu(null)}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ p: 2 }}
      >
        {storyInfo.chapters.map((storyChapter, index) => (
          <MenuItem
            disabled={index + 1 === chapter}
            onClick={() => navigate(`?chapter=${index + 1}`)}
            sx={{ px: 3, py: 1 }}
          >
            {index + 1}: {storyChapter.title ?? `Chapter ${index + 1}`}
          </MenuItem>
        ))}
      </Menu>
      {storyInfo.chapters[chapter - 1].content}
    </Box>
  );
}

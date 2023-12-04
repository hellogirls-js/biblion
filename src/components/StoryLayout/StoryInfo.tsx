import {
  Avatar,
  Box,
  Chip,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { StoryContext } from "../../contexts/StoryContext";
import { AccountCircle, Tag } from "@mui/icons-material";

export default function StoryInfo() {
  const theme = useTheme();
  const storyInfo = useContext(StoryContext);
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Paper
      sx={(theme) => ({
        p: 8,
      })}
    >
      <Typography
        variant="h2"
        component="h2"
        textAlign="center"
        fontSize="3rem"
      >
        {storyInfo.title}
      </Typography>
      <Typography textAlign="center" variant="subtitle1" fontSize="0.9rem">
        written by{" "}
        <Link href={storyInfo.authorProfileLink}>{storyInfo.author}</Link>
      </Typography>
      <Typography my={4}>{storyInfo.summary}</Typography>
      <Stack
        direction={isDesktop ? "row" : "column"}
        mt={4}
        justifyContent={isDesktop ? "space-between" : "flex-start"}
      >
        <Box>
          <Typography fontSize="0.9rem" fontWeight={700}>
            Cast
          </Typography>
          <Stack direction="row" gap={1} id="characters">
            {storyInfo.characters?.map((chara) => (
              <Chip
                label={chara.name}
                color="primary"
                avatar={
                  chara.icon ? (
                    <Avatar
                      alt={chara.name}
                      src={chara.icon}
                      sx={{ overflow: "clip" }}
                      imgProps={{
                        style: {
                          width: "400%",
                          height: "400%",
                          marginTop: 60,
                        },
                      }}
                    />
                  ) : undefined
                }
                icon={
                  !chara.icon ? <AccountCircle fontSize="small" /> : undefined
                }
              />
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography fontSize="0.9rem" fontWeight={700}>
            Tags
          </Typography>
          <Stack direction="row" gap={1} id="tags">
            {storyInfo.tags?.map((tag) => (
              <Chip
                label={tag}
                color="primary"
                icon={<Tag fontSize="small" />}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

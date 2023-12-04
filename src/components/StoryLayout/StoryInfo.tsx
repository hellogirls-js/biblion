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
import { AccountCircle, FormatQuote, Tag } from "@mui/icons-material";

export default function StoryInfo() {
  const theme = useTheme();
  const storyInfo = useContext(StoryContext);
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Paper
      sx={{
        p: isDesktop ? 8 : 3,
        py: isDesktop ? "auto" : 5,
      }}
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
      <Box position="relative" mt={4} mb={6}>
        <Typography>{storyInfo.summary}</Typography>
        <Box
          position="absolute"
          top={-30}
          left={-20}
          sx={{ opacity: 0.3, transform: "rotateY(180deg) scale(1.5)" }}
        >
          <FormatQuote color="primary" fontSize="large" />
        </Box>
        <Box
          position="absolute"
          bottom={-25}
          right={-20}
          sx={{ opacity: 0.3, transform: "scale(1.2)" }}
        >
          <FormatQuote color="primary" fontSize="large" />
        </Box>
      </Box>
      <Stack
        direction={isDesktop ? "row" : "column"}
        gap={isDesktop ? 0 : 3}
        mt={4}
        justifyContent={isDesktop ? "space-between" : "flex-start"}
      >
        <Box>
          <Typography fontSize="0.9rem" fontWeight={700}>
            Cast
          </Typography>
          <Stack direction="row" gap={1} id="characters" flexWrap="wrap">
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
          <Stack direction="row" gap={1} id="tags" flexWrap="wrap">
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

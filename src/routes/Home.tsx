import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import { stories } from "../utility/Stories";
import { Link as NavLink } from "react-router-dom";

export default function Home() {
  const storyList = stories;
  return (
    <Grid container spacing={2}>
      {storyList.map((story) => (
        <Grid item xs={12} lg={4} alignItems="stretch">
          <Paper sx={{ p: 2 }}>
            <Link
              component={NavLink}
              to={`/biblion/${story.title.replaceAll(" ", "-")}`}
              sx={{
                fontWeight: 600,
                fontSize: "1.5rem",
                fontFamily: "'Crimson Pro', serif",
              }}
            >
              {story.title}
            </Link>
            {story.summary && <Typography>{story.summary}</Typography>}
            {story.characters && (
              <Box mt={2}>
                <Typography fontWeight="bold">Characters:</Typography>{" "}
                {story.characters.map((chara, index) => (
                  <Typography sx={{ display: "inline" }}>
                    {chara.name}
                    {index < (story.characters?.length ?? 0) - 1 ? ", " : ""}
                  </Typography>
                ))}
              </Box>
            )}
            {story.tags && (
              <Box mt={2}>
                <Typography fontWeight="bold">Tags:</Typography>
                {story.tags.map((tag) => (
                  <Typography sx={{ display: "inline" }}>#{tag} </Typography>
                ))}
              </Box>
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

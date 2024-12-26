import { Box, Stack, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import ModeButton from "../components/ModeButton";

export default function Root() {
  return (
    <Box p={4}>
      <Stack direction="row" gap={2} alignItems="center">
        <ModeButton />{" "}
        <Typography
          variant="h1"
          component={Link}
          to="/biblion"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          BIBLION
        </Typography>
      </Stack>
      <Box px={4} py={2}>
        <Outlet />
      </Box>
    </Box>
  );
}

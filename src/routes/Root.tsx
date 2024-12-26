import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import ModeButton from "../components/ModeButton";

export default function Root() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box p={isDesktop ? 4 : 1}>
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
      <Box px={isDesktop ? 4 : 0} py={2}>
        <Outlet />
      </Box>
    </Box>
  );
}

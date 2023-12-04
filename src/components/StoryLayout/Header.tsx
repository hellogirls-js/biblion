import {
  AppBar,
  Box,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { ReactElement, useContext } from "react";
import { ColorModeContext } from "../../contexts/ColorMode";
import { DarkMode, LightMode } from "@mui/icons-material";

function HideOnScroll(props: { children: ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear in={!trigger} timeout={500}>
      {children}
    </Slide>
  );
}

// function SearchBar() {
//   return (
//     <FormControl variant="outlined" aria-label="Search bar">
//       <OutlinedInput
//         id="header__search-bar"
//         type="text"
//         aria-label="Search"
//         placeholder="Search"
//         size="small"
//         startAdornment={
//           <InputAdornment position="start">
//             <Search />
//           </InputAdornment>
//         }
//       />
//     </FormControl>
//   );
// }

export default function Header() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <HideOnScroll>
      <Box width="100vw" boxSizing="border-box">
        <AppBar position="fixed">
          <Toolbar
            sx={{
              alignItems: "center",
              gap: 1,
              boxSizing: "border-box",
              py: 1,
              "@media (min-width: 600px)": {
                px: isDesktop ? 12 : 2,
              },
            }}
          >
            <IconButton onClick={colorMode.toggleColorMode} color="primary">
              {theme.palette.mode === "light" ? <LightMode /> : <DarkMode />}
            </IconButton>
            <Box>
              <Typography variant="h3" component="h1" fontWeight={900}>
                BIBLION
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </HideOnScroll>
  );
}

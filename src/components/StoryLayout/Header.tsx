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
  const trigger = useScrollTrigger({
    threshold: 25,
  });

  return (
    <Slide appear in={!trigger} timeout={800}>
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
              justifyContent: "space-evenly",
              gap: 1,
              boxSizing: "border-box",
              py: 1,
              "@media (min-width: 600px)": {
                px: isDesktop ? 12 : 2,
              },
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              fontWeight={900}
              color={theme.palette.text.primary}
            >
              BIBLION
            </Typography>
            <IconButton onClick={colorMode.toggleColorMode} color="primary">
              {theme.palette.mode === "light" ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </HideOnScroll>
  );
}

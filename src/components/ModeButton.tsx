import { LightMode, DarkMode } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import { ColorModeContext } from "../contexts/ColorMode";
import { useContext } from "react";

export default function ModeButton() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <IconButton
      onClick={colorMode.toggleColorMode}
      color="primary"
      sx={{ mb: 3 }}
    >
      {theme.palette.mode === "light" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}

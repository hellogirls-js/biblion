import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { ReactNode, createContext, useMemo, useState } from "react";
import {
  DARK_MODE_COLORS,
  DARK_PALETTE,
  LIGHT_MODE_COLORS,
  LIGHT_PALETTE,
} from "../utility/colors";

const NUNITO_FONT = "'Nunito Sans', sans-serif";
const INTER_FONT = "'Inter', sans-serif";
const BOLD_WEIGHT = 700;

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {
    console.log("L");
  },
});

export default function ColorModeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [themeMode, setThemeMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      /**
       * using catppuccin colors https://github.com/catppuccin/catppuccin#-palette
       */
      ...(mode === "light" ? LIGHT_MODE_COLORS : DARK_MODE_COLORS),
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      fontFamily: INTER_FONT,
      h1: {
        fontFamily: NUNITO_FONT,
        fontSize: "3rem",
        fontWeight: 900,
      },
      h2: {
        fontFamily: NUNITO_FONT,
        fontSize: "2.5rem",
        fontWeight: BOLD_WEIGHT,
      },
      h3: {
        fontSize: "2rem",
        fontWeight: BOLD_WEIGHT,
      },
      h4: {
        fontSize: "1.5rem",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          strong {
            color: ${
              mode === "light" ? LIGHT_PALETTE.flamingo : DARK_PALETTE.flamingo
            }
          }
          em {
            color: ${
              mode === "light" ? LIGHT_PALETTE.lavender : DARK_PALETTE.lavender
            }
          }
          p {
            line-height: 2;
            margin: 70px 0px;
          }
        `,
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor:
              mode === "light"
                ? `${LIGHT_MODE_COLORS.background.paper}`
                : DARK_MODE_COLORS.background.paper,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor:
              mode === "light"
                ? `${LIGHT_MODE_COLORS.background.paper} !important`
                : DARK_MODE_COLORS.background.paper,
          },
        },
      },
    },
  });

  const theme = useMemo(() => {
    console.log("toggle");
    return createTheme(getDesignTokens(themeMode), [themeMode]);
  }, [themeMode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

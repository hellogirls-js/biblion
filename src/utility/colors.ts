export const LIGHT_PALETTE = {
  rosewater: "#dc8a78",
  flamingo: "#dd7878",
  pink: "#ea76cb",
  mauve: "#8839ef",
  red: "#d20f39",
  maroon: "#e64553",
  peach: "#fe640b",
  yellow: "#df8e1d",
  green: "#40a02b",
  teal: "#179299",
  sky: "#04a5e5",
  sapphire: "#209fb5",
  blue: "#1e66f5",
  lavender: "#7287fd",
  text: "#4c4f69",
  subtext1: "#5c5f77",
  subtext2: "#6c6f85",
  base: "#eff1f5",
  mantle: "#e6e9ef",
  crust: "#dce0e8",
  surface0: "#ccd0da",
  surface1: "#bcc0cc",
  surface2: "#acb0be",
  overlay0: "#9ca0b0",
  overlay1: "#8c8fa1",
  overlay2: "#7c7f93",
};

export const DARK_PALETTE = {
  rosewater: "#f2d5cf",
  flamingo: "#eebebe",
  pink: "#f4b8e4",
  mauve: "#ca9ee6",
  red: "#e78284",
  maroon: "#ea999c",
  peach: "#ef9f76",
  yellow: "#e5c890",
  green: "#a6d189",
  teal: "#81c8be",
  sky: "#99d1db",
  sapphire: "#85c1dc",
  blue: "#8caaee",
  lavender: "#babbf1",
  text: "#c6d0f5",
  subtext1: "#b5bfe2",
  subtext2: "#a5adce",
  base: "#303446",
  mantle: "#292c3c",
  crust: "#232634",
  surface0: "#414559",
  surface1: "#51576d",
  surface2: "#626880",
  overlay0: "#737994",
  overlay1: "#838ba7",
  overlay2: "#949cbb",
};

export const LIGHT_MODE_COLORS = {
  // insert light mode colors
  primary: {
    // light: "#c7cbfe",
    main: LIGHT_PALETTE.lavender,
    // dark: "#294eee",
    // darker: "#163ad5",
    contrastText: LIGHT_PALETTE.base,
  },
  secondary: {
    // light: "#fbe0f2",
    main: LIGHT_PALETTE.pink,
    // dark: "#cb00a2",
    // darker: "#ad008e",
    contrastText: LIGHT_PALETTE.subtext1,
  },
  error: {
    main: LIGHT_PALETTE.maroon,
  },
  success: {
    main: LIGHT_PALETTE.green,
  },
  warning: {
    main: LIGHT_PALETTE.yellow,
  },
  info: {
    main: LIGHT_PALETTE.blue,
  },
  background: {
    paper: LIGHT_PALETTE.base,
    default: LIGHT_PALETTE.mantle,
  },
  text: {
    primary: LIGHT_PALETTE.text,
    secondary: LIGHT_PALETTE.subtext1,
  },
  divider: LIGHT_PALETTE.surface0,
};

export const DARK_MODE_COLORS = {
  // insert dark mode colors
  primary: {
    // light: "#eeeffc",
    main: DARK_PALETTE.lavender,
    // dark: "#8b86e2",
    // darker: "#7365cf",
    contrastText: DARK_PALETTE.base,
  },
  secondary: {
    // light: "#fbe3f4",
    main: DARK_PALETTE.pink,
    // dark: "#d957bb",
    // darker: "#c0009d",
    contrastText: DARK_PALETTE.subtext1,
  },
  error: {
    main: DARK_PALETTE.maroon,
  },
  success: {
    main: DARK_PALETTE.green,
  },
  warning: {
    main: DARK_PALETTE.yellow,
  },
  info: {
    main: DARK_PALETTE.blue,
  },
  background: {
    default: DARK_PALETTE.base,
    paper: DARK_PALETTE.mantle,
  },
  text: {
    primary: DARK_PALETTE.text,
    secondary: DARK_PALETTE.subtext1,
  },
  divider: DARK_PALETTE.surface0,
};

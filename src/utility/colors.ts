export const LIGHT_PALETTE = {
  rosewater: "hsl(11, 59%, 67%)",
  flamingo: "hsl(0, 60%, 67%)",
  pink: "hsl(316, 73%, 69%)",
  mauve: "hsl(266, 85%, 58%)",
  red: "hsl(347, 87%, 44%)",
  maroon: "hsl(355, 76%, 59%)",
  peach: "hsl(22, 99%, 52%)",
  yellow: "hsl(35, 77%, 49%)",
  green: "hsl(109, 58%, 40%)",
  teal: "hsl(183, 74%, 35%)",
  sky: "hsl(197, 97%, 46%)",
  sapphire: "hsl(189, 70%, 42%)",
  blue: "hsl(220, 91%, 54%)",
  lavender: "hsl(231, 97%, 72%)",
  text: "hsl(234, 16%, 35%)",
  subtext1: "hsl(233, 13%, 41%)",
  subtext2: "hsl(233, 10%, 47%)",
  base: "hsl(220, 23%, 95%)",
  mantle: "hsl(220, 22%, 92%)",
  crust: "hsl(220, 21%, 89%)",
  surface0: "hsl(223, 16%, 83%)",
  surface1: "hsl(225, 14%, 77%)",
  surface2: "hsl(227, 12%, 71%)",
  overlay0: "hsl(228, 11%, 65%)",
  overlay1: "hsl(231, 10%, 59%)",
  overlay2: "hsl(232, 10%, 53%)",
};

export const DARK_PALETTE = {
  rosewater: "hsl(10, 57%, 88%)",
  flamingo: "hsl(0, 59%, 84%)",
  pink: "hsl(316, 73%, 84%)",
  mauve: "hsl(277, 59%, 76%)",
  red: "hsl(359, 68%, 71%)",
  maroon: "hsl(358, 66%, 76%)",
  peach: "hsl(20, 79%, 70%)",
  yellow: "hsl(40, 62%, 73%)",
  green: "hsl(96, 44%, 68%)",
  teal: "hsl(172, 39%, 65%)",
  sky: "hsl(189, 48%, 73%)",
  sapphire: "hsl(199, 55%, 69%)",
  blue: "hsl(222, 74%, 74%)",
  lavender: "hsl(239, 66%, 84%)",
  text: "hsl(227, 70%, 87%)",
  subtext1: "hsl(227, 44%, 80%)",
  subtext2: "hsl(228, 29%, 73%)",
  base: "hsl(229, 19%, 23%)",
  mantle: "hsl(231, 19%, 20%)",
  crust: "hsl(229, 20%, 17%)",
  surface0: "hsl(230, 16%, 30%)",
  surface1: "hsl(227, 15%, 37%)",
  surface2: "hsl(228, 13%, 44%)",
  overlay0: "hsl(229, 13%, 52%)",
  overlay1: "hsl(227, 17%, 58%)",
  overlay2: "hsl(228, 22%, 66%)",
};

export const LIGHT_MODE_COLORS = {
  // insert light mode colors
  primary: {
    main: LIGHT_PALETTE.lavender,
    contrastText: LIGHT_PALETTE.base,
  },
  secondary: {
    main: LIGHT_PALETTE.blue,
    contrastText: LIGHT_PALETTE.base,
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
    main: DARK_PALETTE.lavender,
    contrastText: DARK_PALETTE.base,
  },
  secondary: {
    main: DARK_PALETTE.blue,
    contrastText: DARK_PALETTE.base,
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

export const toHSLObject = (hslStr: string) => {
  const [hue, saturation, lightness] = (
    hslStr.match(/\d+/g) as RegExpMatchArray
  ).map(Number);
  return { hue, saturation, lightness };
};

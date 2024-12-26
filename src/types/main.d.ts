import { ReactElement, ReactNode } from "react";

const catppuccinColorNames = [
  "rosewater",
  "flamingo",
  "pink",
  "mauve",
  "red",
  "maroon",
  "peach",
  "yellow",
  "green",
  "teal",
  "sky",
  "sapphire",
  "blue",
  "lavender",
];

type CatppuccinColorNames = (typeof catppuccinColorNames)[number];

interface ColorModeContextType {
  toggleColorMode: () => void;
}

interface StoryCharacter {
  name: string;
  icon?: string;
}

interface StoryType {
  title: string;
  author: string;
  authorProfileLink?: string;
  summary?: string | ReactElement;
  chapters: Array<{ title: string | null; content: ReactNode }>;
  storyIcon?: string;
  characters?: StoryCharacter[];
  tags?: string[];
  note?: ReactElement;
}

import { Fragment, ReactElement, createContext } from "react";
import { StoryType } from "../types/main";
import { Link, Typography } from "@mui/material";

const defaultValue: StoryType = {
  title: "niki nii-san",
  author: "son",
  authorProfileLink: "https://about.hellogirls.info",
  summary: (
    <Fragment>
      <Typography mt={2}>
        Rinne wakes up from his nap on the sofa when Niki walks into the
        apartment with a handful of grocery bags.
      </Typography>
      <Typography mt={2}>... At least he thinks that's Niki.</Typography>
      <Typography mt={2}>(A 1000 word demo, enjoy!)</Typography>
    </Fragment>
  ),
  chapters: ["Who are you...?"],
  characters: [
    {
      name: "Rinne Amagi",
      icon: "https://assets.enstars.link/assets/card_full1_2046_normal.png",
    },
    {
      name: "Niki Shiina",
      icon: "https://assets.enstars.link/assets/card_full1_2049_normal.png",
    },
    {
      name: "Original Character",
    },
  ],
  tags: ["Alternate Universe", "Niki has a twin brother"],
  note: (
    <Fragment>
      <Typography component="p" fontSize="0.9rem">
        this mini-fic was inspired by{" "}
        <Link href="https://twitter.com/niki_pan08">niki_pan08</Link>'s au where
        niki has an older twin brother who looks like his beta design!
      </Typography>
      <Typography component="p" fontSize="0.9rem">
        i'm only really capable of writing exposition and have never really
        written a fic with plot before so... i hope you enjoy?
      </Typography>
    </Fragment>
  ),
};

export const StoryContext = createContext<StoryType>(defaultValue);

export default function StoryProvider(props: { children: ReactElement }) {
  const { children } = props;
  return (
    <StoryContext.Provider value={defaultValue}>
      {children}
    </StoryContext.Provider>
  );
}

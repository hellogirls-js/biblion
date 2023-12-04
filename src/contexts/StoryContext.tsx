import { ReactElement, createContext } from "react";

const defaultValue: StoryType = {
  title: "niki nii-san",
  author: "son",
  authorProfileLink: "https://about.hellogirls.info",
  summary:
    "Rinne takes a nap on the couch and wakes up when Niki comes home from work with groceries. At least, he thinks that's Niki... (a 1000 word demo)",
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

import ColorModeProvider from "./contexts/ColorMode";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import StoryPage from "./routes/Story";
import Root from "./routes/Root";

function App() {
  return (
    <ColorModeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/:storyTitle" element={<StoryPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ColorModeProvider>
  );
}

export default App;

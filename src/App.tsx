import ColorModeProvider from "./contexts/ColorMode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import StoryPage from "./routes/Story";
import Root from "./routes/Root";

function App() {
  return (
    <ColorModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/biblion" element={<Root />}>
            <Route index element={<Home />} />
            <Route path=":storyTitle" element={<StoryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ColorModeProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Components from "./pages/Components.tsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

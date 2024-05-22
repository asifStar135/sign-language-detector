import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TechStack from "./pages/TechStack";
import Detection from "./pages/Detection";
import About from "./pages/About";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/detection" element={<Detection />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

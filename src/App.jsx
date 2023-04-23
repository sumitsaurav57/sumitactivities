import { useState } from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Project from "./components/Project";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div
      className="min-h-screen w-screen relative  flex justify-center  overflow-x-hidden"
      style={{ background: `#1e1e1e` }}
    >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}
export default App;

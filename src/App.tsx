import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo"; // Import the Logo component
import "./App.css"; // Ensure you import the CSS file with the styles

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="Content">
        <Logo /> {/* Include the Logo component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

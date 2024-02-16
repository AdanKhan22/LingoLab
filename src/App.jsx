import React from "react";
import MyNav from "./Components/navbar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import TextForm from "./Components/TextForm";

function App() {
  const [mode, setMode] = useState(`light`);

  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);

      document.body.style.backgroundColor = `#28282B`;
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = `white`;
    }
  };

  return (
    <Router>
      <div>
        <MyNav title="LinguoLab" mode={mode} toggleMode={toggleMode} />
      </div>
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<TextForm mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

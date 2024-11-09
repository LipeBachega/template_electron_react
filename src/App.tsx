// src/index.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Setting up the main App component
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Rota para a página Home */}
        </Routes>
      </div>
    </Router>
  );
};

// Locate the root container and render the app
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

export default App;

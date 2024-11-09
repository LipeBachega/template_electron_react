import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client"; // Corrigido: importa 'createRoot'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Setting up the main App component
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route to the Home page */}
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Electron + React + TypeScript + Tailwind + Sequelize + SQLite
      </h1>
      <p className="text-gray-600">
        Edit
        <code className="bg-gray-200 px-2 py-1 rounded">
          src/pages/Home.tsx
        </code>
        to get started
      </p>
      <p className="text-gray-600">
        <a
          className="text-blue-600 hover:text-blue-800"
          href="https://github.com/LipeBachega/template_electron_react"
        >
          View on GitHub
        </a>
      </p>
      <p className="text-gray-600">
        <a
          className="text-blue-600 hover:text-blue-800"
          href="https://github.com/LipeBachega/template_electron_react/issues"
        >
          Report an issue
        </a>
      </p>
    </div>
  );
};

export default Home;

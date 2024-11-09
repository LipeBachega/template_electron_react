Electron-React-TypeScript-Tailwind Template

A complete and modern template for building desktop applications with Electron, React, TypeScript, Tailwind CSS, Sequelize, and SQLite. This template aims to streamline setup and provide a ready-to-use structure, perfect for developers who want productivity with web technologies applied to desktop.

⚙️ Technologies and Libraries Used

- Electron: Framework for building cross-platform desktop applications with web technologies.
- React: JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that adds static typing.
- Tailwind CSS: Utility-first CSS framework for rapid UI development.
- Sequelize: ORM for database manipulation.
- SQLite: Lightweight, embedded SQL database.

🚀 Features

- Modular structure with separated Webpack configurations (main, renderer, and plugins).
- Local database support with SQLite and Sequelize ORM.
- Modern and responsive styling with Tailwind CSS.
- Typed environment with TypeScript for enhanced development productivity and safety.

🛠 Prerequisites

Node.js (version 14 or higher)
npm (or yarn)

⚡️ Getting Started

1. Clone the Repository
   bash
   git clone https://github.com/LipeBachega/template_electron_react.git
   cd your-repo

2. Install Dependencies
   bash
   npm install

3. Start the Development Environment
   bash
   npm start

4. Build for Production
   bash
   npm run build

   📂 Project Structure

   Here’s an overview of the main files and folders in this template:

- forge.config.ts: Configuration for Electron Forge.
- package.json: Project dependencies and scripts.
- tailwind.config.js: Tailwind CSS configuration.
- tsconfig.json: TypeScript configuration.
- webpack.main.config.ts: Webpack configuration for the main process.
- webpack.renderer.config.ts: Webpack configuration for the renderer process.
- src: Main source code for the application:
- - App.tsx: Root React component.
- - database: Sequelize setup and SQLite models.
- - models: Database models.
- - index.ts: Database initialization and configuration.-
- - components: Reusable UI components.
- - pages: Main views/screens of the application.
- - styles: Global and component styles.
- - utils: Utility functions.
- - index.tsx: Entry point for the renderer process.

🗃️ Database

This project uses SQLite as its database, accessed through Sequelize (a JavaScript/TypeScript ORM). The basic setup is already included, but you can customize or add new models as needed in the src/database folder.

🎨 Styling with Tailwind CSS

Tailwind CSS allows for quick styling with utility classes. For further customization, modify the tailwind.config.js file.

📜 Available Scripts

In package.json, you’ll find helpful scripts for development and production:

- npm start: Starts the development environment.
- npm run build: Builds the project for production.
- npm run lint: Runs code linting.

🤝 Contributing

Feel free to fork the repository, open issues, and submit pull requests. We welcome all contributions that can help improve this template for other developers!


📄 License

This project is licensed under the MIT License.

This template is ideal for starting an Electron-React project quickly with best development practices. Enjoy, and consider contributing to enhance it for the community!

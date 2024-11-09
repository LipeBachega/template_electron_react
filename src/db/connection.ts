import { Sequelize } from "sequelize";
import sqlite3 from "sqlite3";
import { app } from "electron";
import * as path from "path";

// Function to get the database path based on the environment
export const getDatabasePath = () => {
  // In development, use the database.sqlite file in the src/db folder
  if (process.env.NODE_ENV === "development") {
    console.log("Using development database");
    return "./src/db/database.sqlite";
  }

  // In production, use the userData path
  const userDataPath = app.getPath("userData");
  return path.join(userDataPath, "database.sqlite");
};

export const connectionSequelize = new Sequelize({
  dialect: "sqlite",
  dialectModule: sqlite3,
  storage: getDatabasePath(),
  logging: false,
});

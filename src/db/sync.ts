import User from "../models/User";
import { connectionSequelize } from "./connection";

export const syncDatabase = async () => {
  await User.sync();
  console.log("Tables synced");
};

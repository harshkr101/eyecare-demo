import * as dotenv from "dotenv";
dotenv.config();

export const configs = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT,
};

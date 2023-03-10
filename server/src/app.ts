import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { configs } from "./config";
import blogRoutes from "./router/routes";

const app = express();
// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Use the blog routes
app.use("/api", blogRoutes);

// connect to database
const connect = async (url: string) => {
  await mongoose
    .connect(url)
    .then(() => {
      console.log("Database Connected...");
    })
    .catch((err) => {
      console.error(err);
    });
};

// method to connect to db and start the server
const start = async () => {
  try {
    // wait for db connection
    await connect(configs.DB_URL);

    app.listen(configs.PORT, () => {
      console.log(`Server has started on port ${configs.PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

// start the server
start();

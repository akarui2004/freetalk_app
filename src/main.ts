import * as dotenv from "dotenv";
import express, { json, urlencoded } from "express";
import mongoose from "mongoose";

dotenv.config();//Using this code to read the env file through application

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

const start = async () => {
  if (!process.env.MONGODB_CONN) throw new Error("MONGODB_CONN does not define.");

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_CONN); //waiting for the connection establish => may be it take a little bit long
    console.log("Establish connection successful.");
  } catch (error) {
    throw new Error("Can not establish to the mongoDB connection.");
    console.log(error);
  }
}

start();

app.listen(9191, () => {
  console.log("Server is up and running at port 9191");
});
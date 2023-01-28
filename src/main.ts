import express from "express";

const app = express();

app.listen(9191, () => {
  console.log("Server is up and running at port 9191");
});
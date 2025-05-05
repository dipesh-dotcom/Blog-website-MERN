const express = require("express");
const app = express();
require("./database/connection");

app.get("/", (req, res) => {
  res.send("Hello world..");
});

app.listen(3000, () => {
  console.log("Backend run on the port 3000..");
});

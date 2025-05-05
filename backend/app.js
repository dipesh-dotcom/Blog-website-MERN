const express = require("express");
const blogRouter = require("./route/blog.route"); // import route file
const app = express();
require("./database/connection");

app.use(express.json()); // to parse json data

// for route
app.use("/api/blog", blogRouter);

app.listen(3000, () => {
  console.log("Backend run on the port 3000..");
});

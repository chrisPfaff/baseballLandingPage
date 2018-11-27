const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/main.html"));
});

app.listen(process.env.PORT || port, () => {
  console.log("Your server is running at port 3000");
});

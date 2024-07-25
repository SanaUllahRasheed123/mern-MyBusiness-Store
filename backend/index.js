const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Sana Ullah G");
});

app.listen(port, () => {
  console.log(`This is node index.js file`);
});

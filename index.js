"use strict";

const express = require("express");
const PORT = 3000;
const app = express();

app.use("/", (req, res) => {
  res.send("Hey From Express App");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

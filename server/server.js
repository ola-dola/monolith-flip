const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(express.static("../client/build"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/api/greeting", (req, res) => {
  res.json(`Hello, ${req.query.name}! How are you?`);
});

app.use((req, res) => {
  res.json("App is alive");
});

module.exports = app;

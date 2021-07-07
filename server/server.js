const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/api/greeting", (req, res) => {
  res.json(`Hello, ${req.query.name}! How are you?`);
});

app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// app.use((req, res) => {
//   res.json("App is alive");
// });

module.exports = app;

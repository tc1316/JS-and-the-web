const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

let notes = ["This note is coming from the server"];

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/notes", (_req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  });
  res.send(JSON.stringify(notes));
});

app.post("/notes", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  });
  notes.push(req.body.content);
  res.send(JSON.stringify(notes));
});

app.delete("/notes", (req, res) => {
  notes = [];
  res.send(JSON.stringify(notes));
});

app.listen(PORT);

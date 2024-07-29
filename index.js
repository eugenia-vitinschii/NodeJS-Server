const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  return res.send("Hello from  Home page!");
});

//  Use : http://localhost:8000/about?myName=Eugenia

app.get("/about", (req, res) => {
  return res.send("Hello from:  About page! " + req.query.myName);
});

app.listen(PORT, () => console.log("Server started! (express)"));

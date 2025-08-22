const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.use(express.static("public")); //default connected with public folder
app.use(express.static(path.join(__dirname, "/public/css"))); //now i can access this file from everywhere
app.use(express.static(path.join(__dirname, "/public/js")));
app.set("view engine", "ejs"); //default connected with views
app.set("views", path.join(__dirname, "/views")); //set path for any dirrectory

app.get("/", (req, res) => {
  let num = 100;
  res.render("home", { num });
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  let data = instaData[username];
  if (data) {
    res.render("instagram", { data, username });
  } else {
    res.render("error");
  }
});

app.get("/rolldice", (req, res) => {
  let dice = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { dice });
});

app.listen(port, (req, res) => {
  console.log("Server is working");
});

const express = require("express");
const app = express();

app.get("/bobae", function (req, res) {
  res.send("hello bobae world!");
});

app.get("/", function (req, res) {
  res.send("<h1></h1>만드는 중입니다.<h1></h1>");
});

app.listen(3000, () => {
  console.log("connect on 3000");
});

app.get("/hi", function (req, res) {
  res.send("hellow my name is HI~");
});

app.get("/paju", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/me", (req, res) => {
  res.sendFile(__dirname + "/me.html");
});

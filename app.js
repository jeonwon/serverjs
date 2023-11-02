"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home");

app.use("/", home); // 미들웨어 등록해 주는 메서드.

// 앱세팅
app.set("views", "./views");
app.set("view engine", "ejs");

module.exports = app;

// 노드실행 node index.js
// 자동 서버실행 npm install -g nodemon   실행 nodemone server.js
// npm install ejs -s

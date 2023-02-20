"use strict"

const express= require("express");
const app=express();

// app setting
app.set("views", "./views");
app.set("view engine", "ejs");

// routing
const router = require("./routes/route.js");
app.use("/", router);

module.exports=app;

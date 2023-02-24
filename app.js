"use strict"

const express= require("express");
const app=express();

//라우팅
const home = require("./routes/route.js");
app.use("/", home);

//세팅
//bin 에서 실행
app.set("views", "./views");
app.set("view engine", "ejs");

// app.get('/', (req, res) => {

//     console.log("안녕하세요");
//     // res.json({
//     //     success: true,
//     // });
// });


module.exports=app;

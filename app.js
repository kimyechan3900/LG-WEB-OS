"use strict"

const express= require("express");
const app=express();

app.get('/', (req, res) => {

    console.log("안녕하세요");
    // res.json({
    //     success: true,
    // });
});


module.exports=app;

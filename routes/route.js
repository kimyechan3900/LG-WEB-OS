"use strict"

const express= require("express");
const router=express();

// 등록된 위험물건 데이터 파일에서 가져오기
const fs = require("fs");
const dangerousGoods = JSON.parse(fs.readFileSync("./database/dangerousGoods.json"));


router.get('/', (req, res) => {
    res.render('main');
});

router.get('/Camera', (req, res) => {
    let data = {url :"https://player.vimeo.com/external/598879603.sd.mp4?s=42f49f520bcfb7a574718840a70cc19bca5e8157&profile_id=165&oauth2_token_id=57447761" };
    let v=JSON.stringify(data);
    console.log(v);
    res.render('Camera',{d:v});
    //res.send(v);
});

router.get('/SleepPattern', (req, res) => {
    const data={sleep:11,wake:8};
    res.render('SleepPattern',{data:data});
});
// DangrousGoods page
router.get("/DangerousGoods", (req, res) => {
    res.render("dangerGoods.ejs", dangerousGoods);
});

router.get("/DangerousGoods/Insert", (req, res) => {
    res.render("insertDangerGoods.ejs");
});

router.get("/DangerousGoods/Delete", (req, res) => {
    res.render("deleteDangerGoods.ejs", dangerousGoods);
});

router.get("/RadiusOfAction", (req, res) => {
    res.render("radiusOfAction.ejs");
});

router.get("/Slip", (req, res) => {
    res.render("slip.ejs");
});

module.exports=router;

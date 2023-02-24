"use strict"

const express= require("express");
const router=express();


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

module.exports=router;

"use strict";

// router setting
const router = require("express").Router();

// DangrousGoods page
router.get("/DangerousGoods", (req, res) => {
    res.render("dangerGoods.ejs");
});

router.get("/DangerousGoods/Insert", (req, res) => {
    res.render("insertDangerGoods.ejs");
});

router.get("/DangerousGoods/Delete", (req, res) => {
    res.render("deleteDangerGoods.ejs");
});

module.exports = router;

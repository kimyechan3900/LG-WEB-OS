"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.ejs");
});

router.get("/RadiusOfAction", (req, res) => {
    res.render("radiusOfAction.ejs");
});

router.get("/Slip", (req, res) => {
    res.render("slip.ejs");
});

module.exports = router;

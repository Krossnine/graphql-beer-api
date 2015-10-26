"use strict";

const router = require("express").Router();

router.use("/beers", require("./beers"));

module.exports = router;

"use strict";

const router = require("express").Router();

router.use("/beers", require("./beers"));
router.use("/breweries", require("./breweries"));

module.exports = router;

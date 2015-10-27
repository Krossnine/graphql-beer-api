"use strict";

const router = require("express").Router();
const datastore = require("../datastore");

router.get("/", (req, res) => {
  return res.send(datastore.get('beers'));
});

router.get("/:beerId(\\d+)", (req, res, next) => {
  const beers = datastore.get('beers', {id : parseInt(req.params.beerId, 10)});
  return beers ? res.send(beers) : next();
});

router.get("/:beerName", (req, res, next) => {
  const beer = datastore.get('beers', {name : req.params.beerName});
  return beer ? res.send(beer) : next();
});

module.exports = router;

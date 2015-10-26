"use strict";

const router = require("express").Router();
const datastore = require("../datastore");

router.get("/", (req, res) => {
  return res.send(datastore.get('beers'));
});

router.get("/:beerId(\\d+)", (req, res) => {
  return res.send(datastore.get('beers', {id: parseInt(req.params.beerId, 10)}));
});

router.get("/:beerName", (req, res) => {
  return res.send(datastore.get('beers', {name: req.params.beerName}));
});

module.exports = router;

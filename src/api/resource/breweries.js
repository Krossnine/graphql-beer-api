"use strict";

const router = require("express").Router();
const datastore = require("../datastore");

router.get("/", (req, res) => {
  return res.send(datastore.get('breweries'));
});

router.get("/:breweryId(\\d+)", (req, res, next) => {
  const brewery = datastore.get('breweries', {id : parseInt(req.params.breweryId, 10)});
  return brewery ? res.send(brewery) : next();
});

module.exports = router;

"use strict";

const app = new require("express")();

app.use(require("./resource"));
app.use((req, res) => {
  res.status(404).send({
    error : 'Not found'
  });
});
app.use((err, req, res, next) => {
  res.status(500).send({
    error : 'Internal server error'
  });
});

module.exports = app;



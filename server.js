var express = require("express");
var multer = require("multer");

var upload = multer({ dest: "uploads/" });

var app = express();

app.post("/api/file", upload.single("file"), function(req, res, next) {
  console.log(req.file);
  res.json(req.file);
});

module.exports = app;

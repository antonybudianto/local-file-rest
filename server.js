var express = require("express");
var multer = require("multer");

var upload = multer({ dest: "uploads/" });

var app = express();

app.use("/files", express.static("uploads"));
app.post("/api/file", upload.single("file"), function(req, res, next) {
  console.log(req.file);
  const file = {
    size: req.file.size,
    mimetype: req.file.mimetype,
    link: `http://localhost:5000/files/${req.file.filename}`
  };
  res.json(file);
});

module.exports = app;

const bodyParser = require("body-parser");
const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res){
    res.render("index");
  });
  app.get("/codetest", function(req, res){
    res.render("codetest");
  });






app.listen(3000, function() {
    console.log("Server started on port 3000.");
  });
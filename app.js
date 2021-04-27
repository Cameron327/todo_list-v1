//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
let ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
  var today = new Date();
  var currentDay = today.getDay();

  if (currentDay === 0) {
    res.sendFile(__dirname + "/weekend.html");
  }
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

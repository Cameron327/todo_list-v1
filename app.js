//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
let ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Error: Current day number is equal to: " + currentDay)
  }

  // do all of the processing in the break statements and then put it in once
  // Here, the first argument is the name of the ejs file and the second arg is the variable and value key pair
  res.render("list", { kindOfDay: day });
  // in this funciton, I used different variable names for the day to be very explicit on what is being passed to where
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});

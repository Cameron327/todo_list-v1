//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
let ejs = require("ejs");

const app = express();

let items = ["Milk", "Eggs", "Fruit"];
let workItems = [];

app.set("view engine", "ejs");

// this is to use the body parser for the post request
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let today = new Date();
  let currentDay = today.getDay();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options)

  // do all of the processing in the break statements and then put it in once
  // Here, the first argument is the name of the ejs file and the second arg is the variable and value key pair
  res.render("list", { listTitle: day, newListItems: items });
  // in this funciton, I used different variable names for the day to be very explicit on what is being passed to where
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  
  console.log(req.body);

  // We have this check to see which list the item was added to
  // Get the data from the value of our button which was named the exact same as the listTitle so that's how we know
  if (req.body.list === "Work List"){
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    // use redirect for the post method and render for the get method
    // you can't use render here because when the get method is loaded first, it won't have a value to put into the ejs variable in our html page yet
    // in addition, you would also have to create the list variable at the top of the file and not here (for scope reasons)
    // Use an array so that we don't just keep overriding the newest item
    // So, ititialize it at the top with nothing
    res.redirect("/");
  }
});

app.get("/work", function (req,res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

// Do we even need this since nothing is being posted to the work route? The only form we have is being posted to the "/" route and we do the check in there
// Still, we do need the work get method but I don't know about the post
app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);

  res.redirect("work");
});


app.get("/about", function (req,res) {
  res.render("about");
});


app.listen(3000, function () {
  console.log("Server started on port 3000!");
});

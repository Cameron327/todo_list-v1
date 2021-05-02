// jshint esversion:6
// Always have to specify this at the top

// This is how we can use this function elsewhere. Log it to see what is in it first.
// Look at the node docs on modules
console.log(module);

module.exports.getDate = function() {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  return day;
}

module.exports.getDay = function() {
  let today = new Date();

  let options = {
    weekday: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  return day;
}

console.log(module.exports);

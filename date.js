// jshint esversion:6
// Always have to specify this at the top

// This is how we can use this function elsewhere. Log it to see what is in it first.
// Look at the node docs on modules
console.log(module);

exports.getDate = function() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = today.toLocaleDateString("en-US", options);

  return day;
}

exports.getDay = function() {
  const today = new Date();

  const options = {
    weekday: "long"
  };

  const day = today.toLocaleDateString("en-US", options);

  return day;
}

console.log(module.exports);

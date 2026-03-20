// script.js
// Assignment 4 - Module 4 Solution

(function () {
  // Array of names to loop over
  var names = [
    "Yaakov",
    "John",
    "Jennifer",
    "Jason",
    "Judy",
    "Lake",
    "Aiken",
    "Dawson"
  ];

  // Loop over the names array
  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    // If name starts with 'j' or 'J' -> say Goodbye
    // Otherwise -> say Hello
    if (name[0] === "j" || name[0] === "J") {
      SpeakGoodBye.goodbye(name);
    } else {
      SpeakHello.hello(name);
    }
  }
})();
// SpeakGoodBye.js
// Immediately Invoked Function Expression (IIFE)
// Exposes a single function: SpeakGoodBye.goodbye(name)
(function (window) {
  function SpeakGoodBye() {}

  SpeakGoodBye.prototype.goodbye = function (name) {
    console.log("Goodbye " + name);
  };

  window.SpeakGoodBye = new SpeakGoodBye();
})(window);
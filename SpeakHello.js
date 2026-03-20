// SpeakHello.js
// Immediately Invoked Function Expression (IIFE)
// Exposes a single function: SpeakHello.hello(name)
(function (window) {
  function SpeakHello() {}

  SpeakHello.prototype.hello = function (name) {
    console.log("Hello " + name);
  };

  window.SpeakHello = new SpeakHello();
})(window);
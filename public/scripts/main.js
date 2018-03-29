(function (window) {
  "use strict";
  var App = window.App || {};

  var MAIN_CONTAINER_SELECTOR = "#main-container";
  App.MAIN_WINDOW_SELECTOR = "#main-window";

  $(App.MAIN_WINDOW_SELECTOR).load("register.html");

  // Disable anchor tags - https://stackoverflow.com/a/1164654
  $(function() {
    $(MAIN_CONTAINER_SELECTOR).on("click", function (e) {
      if ($(e.target).is("a")) {
        var href = $(e.target).attr("href");
        if (href && href[0] == '/') {
          e.preventDefault();

          $(App.MAIN_WINDOW_SELECTOR).empty();
          $(App.MAIN_WINDOW_SELECTOR).load(href);
        }
      }
    });
  });

  window.App = App;
})(window);

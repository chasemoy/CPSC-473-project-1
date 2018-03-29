(function (window) {
  "use strict";
  var MAIN_CONTAINER_SELECTOR = "#main-container";
  var MAIN_WINDOW_SELECTOR = "#main-window";

  $(MAIN_WINDOW_SELECTOR).load("register.html");

  $(function() {
    $(MAIN_CONTAINER_SELECTOR).on("click", function (e) {
      if ($(e.target).is("a")) {
        var href = $(e.target).attr("href");
        if (href && href[0] == '/') {
          e.preventDefault();

          $(MAIN_WINDOW_SELECTOR).empty();
          $(MAIN_WINDOW_SELECTOR).load(href);
        }
      }
    });
  });
})(window);

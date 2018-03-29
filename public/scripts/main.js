(function (window) {
  "use strict";
  var App = window.App || {};
  App.MAIN_WINDOW_SELECTOR = "#main-window";
  App.LOGGED_OUT_NAV_LINKS_SELECTOR = "#login, #register";
  App.LOGGED_IN_NAV_LINKS_SELECTOR = "#logout, #profile, #matched-people, #swipe";

  var MAIN_CONTAINER_SELECTOR = "#main-container";

  // Loads a new page
  // parameters
  // - href : Absolute path to the file you want to load, e.g. ""/login.html"
  App.load_page = function(href) {
  console.log("loaded");
    $(App.MAIN_WINDOW_SELECTOR).empty();
    $(App.MAIN_WINDOW_SELECTOR).load(href);

    dpd.users.me(function(result, error) {
      if (error) {
        alert(JSON.stringify(error));
      } else {
        if (result) {
          $(App.LOGGED_OUT_NAV_LINKS_SELECTOR).hide();
          $(App.LOGGED_IN_NAV_LINKS_SELECTOR).show();
        }
        else {
          $(App.LOGGED_IN_NAV_LINKS_SELECTOR).hide();
          $(App.LOGGED_OUT_NAV_LINKS_SELECTOR).show();
        }
      }
    });
  };

  App.load_page("/login.html");

  // Disable anchor tags - https://stackoverflow.com/a/1164654
  $(function() {
    $(MAIN_CONTAINER_SELECTOR).on("click", function (e) {
      if ($(e.target).is("a")) {
        var href = $(e.target).attr("href");
        if (href && href[0] == '/') {
          e.preventDefault();
          App.load_page(href);
        }
      }
    });
  });

  window.App = App;
})(window);

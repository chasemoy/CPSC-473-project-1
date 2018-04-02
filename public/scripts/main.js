(function (window) {
  "use strict";
  var App = window.App || {};
  App.MAIN_WINDOW_SELECTOR = "#main-window";
  App.LOGGED_OUT_NAV_LINKS_SELECTOR = "[data-nav-class=\"logged-out\"]";
  App.LOGGED_IN_NAV_LINKS_SELECTOR = "[data-nav-class=\"logged-in\"]";

  var MAIN_CONTAINER_SELECTOR = "#main-container";

  // Loads a new page
  // parameters
  // - href : Absolute path to the file you want to load, e.g. ""/login.html"
  App.load_page = function(href) {
    console.log("loaded");
    $(App.MAIN_WINDOW_SELECTOR).empty();
    $(App.MAIN_WINDOW_SELECTOR).load(href);

    dpd.users.me(function(user) {
      if (user) {
        console.log("in");
        $(App.LOGGED_OUT_NAV_LINKS_SELECTOR).hide();
        $(App.LOGGED_IN_NAV_LINKS_SELECTOR).show();
      }
      else {
        console.log("out");
        $(App.LOGGED_IN_NAV_LINKS_SELECTOR).hide();
        $(App.LOGGED_OUT_NAV_LINKS_SELECTOR).show();
      }
    });
  };

  // Load default appropriate page
  var defaultPage = "/home.html";
  dpd.users.me(function(user) {
    if (user) {
      defaultPage = "/profile.html";
    }
  });
  App.load_page(defaultPage);

  // Disable anchor tags - https://stackoverflow.com/a/1164654
  $(function() {
    $(MAIN_CONTAINER_SELECTOR).on("click", function (e) {
      if ($(e.target).is("a")) {
        var href = $(e.target).attr("href");
        if (href && href[0] == '/' && !$(e.target).hasClass(App.MENU_BTN_SELECTOR)) {
          e.preventDefault();
          App.setActiveLink(href);
          App.load_page(href);
        }
      }
    });
  });

  window.App = App;
})(window);

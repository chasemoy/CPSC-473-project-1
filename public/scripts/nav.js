(function (window) {
  "use strict";
  var App = window.App || {};

  App.MENU_BTN_SELECTOR = ".menu-btn";
  var DESKTOP_NAVBAR_SELECTOR = "#desktop-navbar";
  var DESKTOP_NAVBAR_LINKS_SELECTOR = DESKTOP_NAVBAR_SELECTOR + " a:not("+App.MENU_BTN_SELECTOR+")"
  var ACTIVE_LINK_CLASSES = "w3-bar-item w3-button w3-padding-large w3-white";
  var INACTIVE_LINK_CLASSES = "w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white";

  $("a.logout-btn").click(function() {
    dpd.users.logout(function(res, err) {
      if (err) {
        alert(JSON.stringify(err));
      }
    });
  });

  App.setActiveLink = function(href) {
    $(DESKTOP_NAVBAR_LINKS_SELECTOR).attr("class", INACTIVE_LINK_CLASSES);
    $(DESKTOP_NAVBAR_SELECTOR).find("a[href=\"" + href + "\"]").attr("class", ACTIVE_LINK_CLASSES);
  };

  window.App = App;
})(window);

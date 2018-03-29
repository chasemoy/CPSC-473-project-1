(function (window) {
  "use strict";
  var App = window.App || {};

  $("a#logout").click(function() {
    dpd.users.logout(function(res, err) {
      App.load_page("/login.html");
    });
  });

})(window);

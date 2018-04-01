(function (window) {
  "use strict";
  var App = window.App || {};

  $("a#logout").click(function() {
    dpd.users.logout(function(res, err) {
      if (err) {
        alert(JSON.stringify(err));
      }
    });
  });

})(window);

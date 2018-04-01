(function (window) {
  "use strict";
  var App = window.App || {};

  dpd.users.me(function(user) {
    if (user) {
      location.href = "/welcome.html";
    }
  });

  $("form").submit(function() {
    var username = $("#username").val();
    var password = $("#password").val();

    dpd.users.login({
  username,
  password
  }, function(session, error) {
      if (error) {
        alert(error.message);
      } else {
        App.load_page("/profile.html");
      }
    });

    return false;
  });

})(window);

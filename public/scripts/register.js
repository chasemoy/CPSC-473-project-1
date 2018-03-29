(function (window) {
  $("form#registration").submit(function() {
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirm-password").val();

    if (!username) {
      alert("Username is required");
    } else if (!email) {
      alert("Email is required");
    } else if (!password) {
      alert("Password is required");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      dpd.users.post({
  username,
  email,
  password
  }, function(user, error) {
        if (error) {
          alert(JSON.stringify(error));
        } else {
          alert("Registration successful");
          $(App.MAIN_WINDOW_SELECTOR).empty();
          $(App.MAIN_WINDOW_SELECTOR).load("/login.html");
        }
      });
    }

    return false;
  });
})(window);

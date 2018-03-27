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
      location.href = "/landingPage.html";
    }
  });

  return false;
});

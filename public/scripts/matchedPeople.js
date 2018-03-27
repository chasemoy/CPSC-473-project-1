dpd.users.me(function(user) {
  if (user) {
    $("h1").text(`Matched People Page`);
  } else {
    location.href = "/";
  }
});


$("#logout-btn").click(function() {
  dpd.users.logout(function(res, err) {
    location.href = "/";
  });
});

$("#landingPage-btn").click(function() {
  location.href = "/landingPage.html";
});

$("#match-btn").click(function() {
  location.href = "/match.html";
});

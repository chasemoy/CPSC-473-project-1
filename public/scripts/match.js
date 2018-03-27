dpd.users.me(function(user) {
  if (user) {
    $("h1").text(`Match Page`);
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

$("#matchedPeople-btn").click(function() {
  location.href = "/matchedPeople.html";
});

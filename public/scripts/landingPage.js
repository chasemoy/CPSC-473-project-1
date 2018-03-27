dpd.users.me(function(user) {
  if (user) {
    $("h1").text(`Welcome, ${  user.username  }! `);
  } else {
    location.href = "/";
  }
});


$("#logout-btn").click(function() {
  dpd.users.logout(function(res, err) {
    location.href = "/";
  });
});

$("#match-btn").click(function() {
  location.href = "/match.html";
});

$("#matchedPeople-btn").click(function() {
  location.href = "/matchedPeople.html";
});

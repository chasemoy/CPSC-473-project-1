var userID;
var i = 2;
dpd.users.me(function(user) {
  if (user) {
    userId = user.id;
  } else {
    location.href = "/";
  }

  dpd.users.get(function (result, err) {

      if (userId != result[i].id) {
        $("h1").text(`Book 1: ${  result[i].bookTitle1}`);
        $("h2").text(`Book 1 comment : ${  result[i].bookComment1}`);
        $("h3").text(`Book 2: ${  result[i].bookTitle2}`);
        $("h4").text(`Book 2 comment: ${  result[i].bookComment2}`);
        $("h5").text(`Book 3: ${  result[i].bookTitle3}`);
        $("h6").text(`Book 3 comment: ${  result[i].bookComment3}`);
      }

    if (err) {
   return console.log(err);
  }
    console.log(result);
  });
});

$('#dislke-btn').click(function() {
i++;
});

$('#like-btn').click(function() {
i++;
});

var userId;
var i = 2;
var lengthList = {};
dpd.users.me(function(user) {

  if (user) {
    userId = user.id;
  } else {
    location.href = "/";
  }

  dpd.users.get(function (result, err) {
    console.log(lengthList);
i = Math.floor(Math.random() * result.length);
while (userId == result[i].id)
{
  i = Math.floor(Math.random() * result.length);
}
      if (userId != result[i].id) {
        $("h7").text(`Person   ${i}`);
        $("h1").text(`Book 1: ${  result[i].bookTitle1}`);
        $("h2").text(` Book 1 comment : ${  result[i].bookComment1}`);
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

$('#dislike-btn').click(function() {
  dpd.users.get(function (result, err) {

    i = Math.floor(Math.random() * result.length);
    while (userId == result[i].id)
    {
      i = Math.floor(Math.random() * result.length);
    }
      if (userId != result[i].id) {
        $("h7").text(`Person   ${i}`);
        $("h1").text(`Book 1: ${  result[i].bookTitle1}`);
        $("h2").text(` Book 1 comment : ${  result[i].bookComment1}`);
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

$('#like-btn').click(function() {

  dpd.users.get(function (result, err) {

    i = Math.floor(Math.random() * result.length);
    while (userId == result[i].id)
    {
      i = Math.floor(Math.random() * result.length);
    }
      if (userId != result[i].id) {
        $("h7").text(`Person   ${i}`);
        $("h1").text(`Book 1: ${  result[i].bookTitle1}`);
        $("h2").text(` Book 1 comment : ${  result[i].bookComment1}`);
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

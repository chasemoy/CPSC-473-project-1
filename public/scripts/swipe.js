(function(window) {
  "use strict";
  var App = window.App || {};

  var NO_BOOK_TEXT = "Untitled";
  var NO_COMMENT_TEXT = "No comment."

  var userId;
  var lengthList = {};

  dpd.users.me(function(user) {
    if (user) {
      userId = user.id;
    } else {
      location.href = "/";
    }
  });

  $('#dislike-btn').click(retrieveAnotherProfile);
  $('#like-btn').click(retrieveAnotherProfile);

  retrieveAnotherProfile();

  function retrieveAnotherProfile() {
    dpd.users.get(function(result, err) {
      if (err) {
        return console.log(err);
      }
      var i = Math.floor(Math.random() * result.length);
      while (userId == result[i].id) {
        i = Math.floor(Math.random() * result.length);
      }

      if (userId != result[i].id) {
        displayProfile(result[i])
      }
    });
  }

  function displayProfile(result) {
    console.log(result);
    $(".username").text(result.username);

    var book1 = result.bookTitle1 ? result.bookTitle1 : NO_BOOK_TEXT;
    $("#book1").text(book1);
    var comment1 = result.bookComment1 ? result.bookComment1 : NO_COMMENT_TEXT;
    $("#comment1").text(comment1);

    var book2 = result.bookTitle2 ? result.bookTitle2 : NO_BOOK_TEXT;
    $("#book2").text(book2);
    var comment2 = result.bookComment2 ? result.bookComment2 : NO_COMMENT_TEXT;
    $("#comment2").text(comment2);

    var book3 = result.bookTitle3 ? result.bookTitle3 : NO_BOOK_TEXT;
    $("#book3").text(book3);
    var comment3 = result.bookComment3 ? result.bookComment3 : NO_COMMENT_TEXT;
    $("#comment3").text(comment3);
  }

})(window);

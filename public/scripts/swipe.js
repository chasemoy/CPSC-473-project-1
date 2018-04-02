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
      App.load_page("/home.html");
      App.setActiveLink("/home.html");
    }
  });

  $('#dislike-btn').click(retrieveAnotherProfile);

  $('#like-btn').click(function(event) {
    var otherId = $("#profile").attr("value");
    // Add swiped user to swipedPeople
    dpd.users.put({id: userId}, {swipedPeople: {$push: otherId}}, function(result, error) {
      if (error) console.log(error);
    });
    // Check if swiped user has swiped self
    dpd.users.get(otherId, function(result, error) {
      if (error) console.log(error);
      else {
        if (-1 != result.swipedPeople.indexOf(userId)) {
          dpd.users.put({id: userId}, {matchedList: {$push: otherId}}, function(result, error) {
            if (error) console.log(error);
          });
          dpd.users.put({id: otherId}, {matchedList: {$push: userId}}, function(result, error) {
            if (error) console.log(error);
          });
        }
      }
    });

    retrieveAnotherProfile();
  });

  retrieveAnotherProfile();

  function retrieveAnotherProfile() {
    dpd.users.me(function(user) {
      dpd.users.get().then(function(result) {
        var unswipedPeople = result.filter(function(other){
          return user.id != other.id;
        });
        console.log(unswipedPeople);
        if (user.swipedPeople) {
          unswipedPeople = unswipedPeople.filter(function(other){
            return -1 == user.swipedPeople.indexOf(other.id);
          });
        }
        console.log(unswipedPeople);
        // Display random user - https://stackoverflow.com/a/4550514
        displayProfile(unswipedPeople[Math.floor(Math.random() * unswipedPeople.length)]);
      });
    });
  }

  function displayProfile(result) {
    if (result) {
      $("#profile-blank").hide();
      $("#profile").show();

      $("#profile").attr("value", result.id);

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
    else {
      $("#profile-blank").show();
      $("#profile").hide();
    }
  }

})(window);

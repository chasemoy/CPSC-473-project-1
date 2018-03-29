(function (window) {
  "use strict";
  var COMMENT_SELECTOR = ".comment";
  var TEXT_SELECTOR = ".text";
  var INVALID_TEXT = $("<span></span>").addClass("invalid");
  var COMMENT_LIMIT = 128;

  // Based on https://stackoverflow.com/a/31169954
  $(COMMENT_SELECTOR).on("input",
    function(event) {
      var text = $(this).text();
      $(this).parent().find(TEXT_SELECTOR).text(text.substring(0, COMMENT_LIMIT));
      $(this).parent().find(TEXT_SELECTOR).append(INVALID_TEXT.text(text.substring(COMMENT_LIMIT)));
  });
})(window);

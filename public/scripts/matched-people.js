(function(window) {
"use strict";
var CHECKLIST_SELECTOR = "[matched-users=\"checklist\"]";
var App = window.App;
var CheckList = App.CheckList;
var checkList = new CheckList(CHECKLIST_SELECTOR);
//sample of matched users
dpd.users.me(function(me) {
  var dict = (me['matchedList']);

  dict.forEach(function(user){
    dpd.users.get(user, function(result, error){
      checkList.addRow(result);
    });
  });
});



})(window);

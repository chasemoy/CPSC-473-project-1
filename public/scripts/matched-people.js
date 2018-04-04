(function(window) {
"use strict";
var CHECKLIST_SELECTOR = "[matched-users=\"checklist\"]";
var App = window.App;
var CheckList = App.CheckList;
var checkList = new CheckList(CHECKLIST_SELECTOR);
//First Query used to get list of matched people
dpd.users.me(function(me) {
  var dict = (me['matchedList']);
//Second query gets books/comments from that list
  dict.forEach(function(user){
    dpd.users.get(user, function(result, error){
      //then adds to checklist
      checkList.addRow(result);
    });
  });
});



})(window);

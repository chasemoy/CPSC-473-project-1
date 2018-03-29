(function(window) {
"use strict";
var CHECKLIST_SELECTOR = "[matched-users=\"checklist\"]";
var App = window.App;
var CheckList = App.CheckList;
var checkList = new CheckList(CHECKLIST_SELECTOR);

//sample of matched users
var dict= [{username: "Ada LoveLace",
             book1: "Dr. Seuss Green Eggs and Ham",
             book1comment:"Book was Excellent",
             book2: "Title",
             book2comment:"Great",
             book3: "Title",
             book3comment:"Awesome"}
             ,
             {
               username:"Jorge Salinas",
               book1: "Lord of The Rings",
               book1comment:"Book was Too long",
               book2: "Lord of The Rings Triology",
               book2comment:"Book was also Too long"
             }];
//dict is array for matched users, array will be passed to checkList.addRow
dict.forEach(function(user){
  checkList.addRow(user);
});



})(window);

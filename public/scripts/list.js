(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
}



 CheckList.prototype.addRow = function(userProfile) {
   // Create a new instance of a row, using the coffee order info
   var rowElement = new Row(userProfile);
   // Add the new row instance's $element property to the checklist
   this.$element.append(rowElement);
 };

 var matchcount = 3;
 function Row(userProfile) {
   var buttonid = "Demo"+matchcount;

   var $div = $('<div></div>', {
         'id': buttonid,
         'class': 'w3-hide w3-container'
   });

   var name = userProfile.username;
   var r= $('<button onclick="myFunction(\''+buttonid+'\')" class="w3-button w3-block w3-theme-l1 w3-left-align">');
   var i = $('<i class="fa fa-users fa-fw w3-margin-right">  </i>'+name+'</button>');
   r.append(i);
   var $p = $('<p></p>');
   var description =userProfile.email+"<br>";
   description += userProfile.bookTitle1+": ";
   description += userProfile.bookComment1+" ";
   description += "<br>"+userProfile.bookTitle2+": ";
   description += userProfile.bookComment2+" ";
   description+= "<br>"+userProfile.bookTitle3+": ";
   description+= userProfile.bookComment3;
   matchcount = (matchcount+1);

   $p.append(description);
   $div.append($p);
   r.append($div);

   return r;
 }

 App.CheckList = CheckList;
 window.App = App;
})(window);

(function(window) {
  "use strict";
  var PROFILE_FORM = '[data-user-profile="form"]';
  //var RE=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  dpd.users.me(function(me) {
    console.log(me);
/*    me.forEach( function(element){
      if(element==NULL || element==undefined){
        element=" ";
      }
    });*/
    $('#username').append("<span>" + me['username'] + "</span>");
    $('#email').attr('value', me['email']);
    $('#booktitle1').attr('value', me['bookTitle1']);
    $('#booktitle2').attr('value', me['bookTitle2']);
    $('#booktitle3').attr('value', me['bookTitle3']);
    $('#bookcommnet1').attr('value', me['bookComment1']);
    $('#bookcommnet2').attr('value', me['bookComment2']);
    $('#bookcommnet3').attr('value', me['bookComment3']);

  });


$(".editemail").click(function(){
  $("#email").attr('readonly',false);
})
$(".editfield1").click(function(){
  $(".edit1").attr('readonly',false);
})
$(".editfield2").click(function(){
  $(".edit2").attr('readonly',false);
})
$(".editfield3").click(function(){
  $(".edit3").attr('readonly',false);
})

  //On click save this fucntion will update book info into the collection of user
  $(".profile_form").submit(function() {
    event.preventDefault();
    console.log("hii");
    dpd.users.me(function(me) {
      console.log("hii");
      var username = $('#username').val();
      var email = $('#email').val();
      var book1_title = $('#booktitle1').val();
      var book1_comment = $('#bookcomment1').val();
      var book2_title = $('#booktitle2').val();
      var book2_comment = $('#bookcomment2').val();
      var book3_title = $('#booktitle3').val();
      var book3_comment = $('#bookcomment3').val();
      console.log(email);
      dpd.users.put(me['id'], {
        "email": email,
        "bookTitle1": book1_title,
        "bookComment1": book1_comment,
        "bookTitle2": book2_title,
        "bookComment2": book2_comment,
        "bookTitle3": book3_title,
        "bookComment3": book3_comment
      }, function(user, err) {
        if (err) return console.log(err);
        console.log(user);
      });

    });
      $("#email").attr('readonly',true);
        $(".edit1").attr('readonly',true);
          $(".edit2").attr('readonly',true);
            $(".edit3").attr('readonly',true);
  });
})(window);

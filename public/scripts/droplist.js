//code taken from https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_social&stacked=h
//provides matchesUsers drop down menu functionality
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-theme-d1";
  } else {
      x.className = x.className.replace("w3-show", "");
      x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
}

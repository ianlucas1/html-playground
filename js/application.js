$(document).ready(function() {
       
  $('body').on('click', 'li a', function(event){       
    event.preventDefault();

    var URL = $(this).attr("href");
    var prompt = "Do you really want to go to " + $(this).text() + "?";
    var userConfirmation = confirm(prompt);
    
    if (userConfirmation)
      window.location = URL;
  });


  $('body').on('click', '.add-link', function(event){       
    event.preventDefault();

    var li = $("<li>")
    var a = $("<a href='http://twitter.com'>Twitter</a>");
    
    li.append(a);

    $("ul").append(li);
  });


});







































// shorthand for document ready
$(function(){
  // application code goes here
});
$(function(){ // shorthand for $(document).ready(function() {

  // $('.add-link-form').hide(); // only need this when form is hard-coded into html

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

    $('.add-link').hide();

    var form = $("<form>")
    var button = $('<input type="submit" value="Add Site">')
    var websiteNameField = $('<div><input type="text" name="site-name" placeholder="Website name" /></div>');
    var websiteURL = $('<div><input type="text" name="site-address" placeholder="Website address" /></div>');
    
    form.append(websiteNameField);
    form.append(websiteURL);
    form.append(button);
    form.addClass('add-link-form')
    $('body').append(form);
  });


  $('body').on('submit','.add-link-form', function(event){
    event.preventDefault();

    var form = $(this);
    var siteName = $(form).find('input[name=site-name]').val();
    var siteURL = $(form).find('input[name=site-address]').val();
    var deleteButton = ('<button class="delete-btn">delete</button>')
    var li = $("<li>")
    var a = $("<a href='" + siteURL + "'>" + siteName + "</a>");

    li.append(a);
    li.append(" " + deleteButton);
    $("ul").append(li);
    $(form).trigger('reset');
    $('.add-link').show();
    form.hide();
  });


  $('body').on('click', '.delete-btn', function(event){
    event.preventDefault();

    var deleteButton = $(this);
    var li = $(this).closest('li');

    $(deleteButton).closest(li).remove();   
  });

});

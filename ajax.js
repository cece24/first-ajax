document.addEventListener("DOMContentLoaded", function() {
  var step2Button = document.querySelector('#step12 > button');
  /* Your code goes here */
  step2Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    });
  });
  
});
